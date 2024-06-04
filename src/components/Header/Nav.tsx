'use client'
import { memo } from 'react'
import Link from 'next/link'

export const Nav = memo(() => {
	return (
		<>
			<nav>
				<div className='flex flex-row items-center gap-5 mr-10'>
					<NavItem href='/' linkText='Home' />
					<NavItem href='/introduction' linkText='Introduction' />
				</div>
			</nav>
		</>
	)
})
Nav.displayName = 'Nav'

const NavItem = memo(
	({
		href,
		linkText,
	}: {
		href: string
		linkText: string
	}) => {
		return (
			<>
				<Link href={href}>{linkText}</Link>
			</>
		)
	},
)
NavItem.displayName = 'NavItem'
