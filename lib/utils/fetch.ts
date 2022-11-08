import { TRANSACTION_ERROR_TYPES } from '../../site.config'

export enum HttpMethod {
	GET = 'GET',
}

export type ErrorsCatalog = { [key: string]: string | string[] | ErrorsCatalog }

export type FetchError = {
	type?: string
	title?: string
	detail?: string
	instance?: string
	status?: number
	traceId?: string
	errors: ErrorsCatalog
}

export type EnhanceErrorArgs = {
	type: string
	response?: Response
	originalError?: Error
}

export type EnhancedError = Error & {
	data: FetchError
	status: number
	originalError: Error
	type: string
	// key to TypeGuard errors in try...catch
	isEnhancedError: boolean
}

// If the status code is not in the range 200-299, we still try to parse and throw it.
export const enhanceError = async ({ type, response, originalError }: EnhanceErrorArgs): Promise<EnhancedError> => {
	const error = new Error(type) as EnhancedError
	error.isEnhancedError = true
	error.type = type

	if (response) {
		error.data = await response.json()
		error.status = response.status
	}

	if (originalError) {
		error.originalError = originalError
	}

	return error
}

export const isEnhancedError = (error: any): error is EnhancedError => {
	return error.isEnhancedError === true
}

// Wrapper function to avoid code duplication every time that we have to check when response !OK
export const handleErrorResponse = async (response: Response): Promise<EnhancedError | undefined> => {
	if (!response.ok) {
		const error = await enhanceError({ type: TRANSACTION_ERROR_TYPES.FETCH_ERROR, response: response })
		return Promise.reject(error)
	}
}

export const getOptions = <T>(data?: T, method?: HttpMethod): RequestInit => ({
	method: method || HttpMethod.GET,
	body: data ? JSON.stringify(data) : undefined,
})

export const fetcher = async <TPayload, TResponse>(
	url: string,
	data?: TPayload,
	method?: HttpMethod
): Promise<TResponse> => {
	const response: Response = await fetch(url, getOptions(data, method))

	await handleErrorResponse(response)

	try {
		const responseData: TResponse = await response.json()
		return Promise.resolve(responseData)
	} catch (err: any) {
		const error = await enhanceError({ type: TRANSACTION_ERROR_TYPES.DATA_ERROR, originalError: err })
		return Promise.reject(error)
	}
}
