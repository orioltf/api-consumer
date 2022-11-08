import { memo } from 'react'
import { NewsProvider } from '../../lib/providers/NewsProvider'
import { ChildrenType } from '../../lib/utils/types'

export const Layout = memo(({ children }: ChildrenType) => {
	return (
		<NewsProvider>
			<div className={`root`}>
				<header>
					<h1>The Guardian: API Consumer</h1>
				</header>
				<main>{children}</main>
				<footer>{`\u00A9 Oriol Torrent ${new Date().getUTCFullYear()}`}</footer>
			</div>
		</NewsProvider>
	)
})

Layout.displayName = 'Layout'
