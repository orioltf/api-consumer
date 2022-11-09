import { createContext, useContext } from 'react'
import { EnhancedError } from '../utils/fetch'

export type NewsResult = {
	id: string
	type?: string
	sectionId?: string
	sectionName?: string
	webPublicationDate?: string
	webTitle?: string
	webUrl?: string
	apiUrl?: string
	fields: {
		headline?: string
		body?: string
		thumbnail?: string
	}
	isHosted?: boolean
	pillarId?: string
	pillarName?: string
}

export type News = {
	response?: News
	status: string
	useTier?: string
	total?: number
	startIndex?: number
	pageSize?: number
	currentPage?: number
	pages?: number
	orderby?: string
	results?: NewsResult[]
}

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
