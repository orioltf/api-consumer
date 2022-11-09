import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NewsResult } from '../lib/hooks/useNews'

type ArticleResponse = {
	status: string
	useTier?: string
	total?: number
	content?: NewsResult
}

const createMarkup = (prop: string) => {
	return { __html: prop }
}

export default function Article() {
	const {
		query: { id },
	} = useRouter()

	const [data, setData] = useState<ArticleResponse>()
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		if (id) {
			const url = `https://content.guardianapis.com/${id}?show-elements=image&show-fields=body,headline,thumbnail&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`
			setLoading(true)
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setData(data.response)
					setLoading(false)
				})
		}
	}, [id])

	return isLoading ? (
		<>Loading…</>
	) : (
		<>
			{data?.content?.fields?.headline ? <h1>{data.content.fields.headline}</h1> : null}
			{data?.content?.fields?.body ? <div dangerouslySetInnerHTML={createMarkup(data.content.fields.body)} /> : null}
		</>
	)
}
