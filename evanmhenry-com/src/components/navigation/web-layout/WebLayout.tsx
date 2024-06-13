import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'

const WebLayout = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='h-dvh flex flex-col items-center'>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className='pt-16 relative flex h-screen w-screen items-start justify-center md:ml-0 md:w-full lg:overflow-visible'>
				<Outlet />
			</div>
		</div>
	)
}

export default WebLayout
