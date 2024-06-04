import type { FC, ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<div className='flex justify-center m-5'>{children}</div>
		</>
	)
}
export default Layout
