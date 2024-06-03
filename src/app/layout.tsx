'use client'
import { Header } from '@/components/Header'
import type { ReactNode } from 'react'
import '../styles/globals.css'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<html>
			<head lang='ja'>
				<title>My website</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>
			<body>
				<main>
					<Header />
					{children}
				</main>
			</body>
		</html>
	)
}

export default Layout
