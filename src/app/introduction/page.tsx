import { LinkButton } from '@/components/Button'
import type { FC } from 'react'
const Page: FC = () => {
	return (
		<>
			<div className='flex flex-col'>
				<h1>Introduction Page</h1>
				<p>Page content</p>
				<p>できる人はNext.jsの公式ページをみてDynamicRouttingを実装してみましょう</p>
				<div className='flex-col'>
					<LinkButton href='/' linkText='Home' />
				</div>
			</div>
		</>
	)
}
export default Page
