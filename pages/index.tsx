import Head from 'next/head'
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

			{isLoading ? 'Loading…' : undefined}
			{isError ? 'Something went wrong :(' : undefined}
			{news ? JSON.stringify(news, null, 4) : undefined}
		</>
	)
}
