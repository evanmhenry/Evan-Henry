import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage'
import WebLayout from './web-layout/WebLayout'
import ErrorPage from '@/pages/ErrorPage'

const BrowserRouter = createBrowserRouter([
	{
		path: '/',
		element: <WebLayout />,
		children: [
			{
				path: '',
				element: <LandingPage />,
			},
		],
		errorElement: <ErrorPage />,
	},
])

export default BrowserRouter
