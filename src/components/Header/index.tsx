'use client'
import { memo } from 'react'
import { Nav } from '@/components/Header/Nav'

export const Header = memo(() => {
	return (
		<>
			<header className='max-w-full w-full bg-sky-600'>
				<div className='flex flex-row text-ali h-20 items-center justify-between text-gray-200'>
					<h1 className='m-5'>Header</h1>
					<Nav />
				</div>
			</header>
		</>
	)
})
Header.displayName = 'Header'
