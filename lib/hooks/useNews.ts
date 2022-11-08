import { createContext, useContext } from 'react'
import { EnhancedError } from '../utils/fetch'

export type News = {}

export type NewsContext = {
	news?: News
	isLoading: boolean
	isError?: EnhancedError
	getNews: () => Promise<News | undefined>
}

export const NewsContext = createContext<NewsContext>({
	isLoading: false,
	getNews: () => Promise.reject(undefined),
})

export const useNews = () => {
	return useContext(NewsContext)
}
