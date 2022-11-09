import { News } from '../../lib/hooks/useNews'

export const NewsList = ({ news }: { news: News }) => {
	return news.results?.length ? (
		<ul>
			{news.results?.map((result) => {
				return <div key={result.id}>{result.webTitle}</div>
			})}
		</ul>
	) : null
}
