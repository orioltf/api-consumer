import Link from 'next/link'
import { News } from '../../lib/hooks/useNews'

export const NewsList = ({ news }: { news: News }) => {
	return news.results?.length ? (
		<ul>
			{news.results?.map((result) => {
				return (
					<li key={result.id}>
						<Link
							href={{
								pathname: '/article',
								query: { id: result.id },
							}}
						>
							{result.webTitle}
						</Link>
					</li>
				)
			})}
		</ul>
	) : null
}
