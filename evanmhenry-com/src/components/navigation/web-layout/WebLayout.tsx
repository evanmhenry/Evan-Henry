import { Outlet } from 'react-router-dom'
import Header from './Header'

const WebLayout = () => {
	return (
		<>
			<Header />
			<div className='flex flex-col flex-1 items-center w-screen overflow-auto bg-background'>
				<Outlet />
			</div>
			{/* <Footer /> */}
		</>
	)
}

export default WebLayout
