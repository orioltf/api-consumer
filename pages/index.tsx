import Head from 'next/head'
import { NewsList } from '../components/NewsList/NewsList'
import { useNews } from '../lib/hooks/useNews'

export default function Home() {
	const { news, isLoading, isError } = useNews()

	return (
		<>
			<Head>
				<title>The Guardian: API Consumer</title>
				<meta name="description" content="API consumer exercise" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{isLoading ? 'Loading…' : null}
			{isError ? 'Something went wrong :(' : null}
			{news ? <NewsList news={news} /> : null}
		</>
	)
}
