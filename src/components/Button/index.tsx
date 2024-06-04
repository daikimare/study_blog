import Link from 'next/link'
import { memo } from 'react'
import type { LinkButtonProps } from '../@types'

export const LinkButton = memo<LinkButtonProps>(({ href, linkText }) => {
	return (
		<>
			<div className='flex justify-center items-center w-40 h-12 rounded-md bg-sky-300'>
				<Link href={href}>{linkText}</Link>
			</div>
		</>
	)
})
LinkButton.displayName = 'LinkButton'
