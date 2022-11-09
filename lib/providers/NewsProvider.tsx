import useSWR from 'swr'
import { News, NewsContext } from '../hooks/useNews'
import { EnhancedError, fetcher } from '../utils/fetch'
import { ChildrenType } from '../utils/types'

export const NewsProvider = ({ children }: ChildrenType) => {
	const NEWS_ENDPOINT = `https://content.guardianapis.com/search?section=news&show-fields=headline,body,thumbnail&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`

	const { data, error, mutate: mutateNews } = useSWR<News, EnhancedError>(NEWS_ENDPOINT, fetcher)

	let updateError

	const getNews = async () => {
		try {
			await mutateNews(fetcher(NEWS_ENDPOINT), {
				optimisticData: data,
				rollbackOnError: true,
				populateCache: true,
				revalidate: true,
			})
		} catch (error) {
			// Assign the error to the hook return
			updateError = error
			return Promise.reject(error)
		}
	}

	return (
		<NewsContext.Provider
			value={{
				news: data?.response ? data.response : data,
				isLoading: !error && !data,
				isError: error || updateError,
				getNews,
			}}
		>
			{children}
		</NewsContext.Provider>
	)
}
