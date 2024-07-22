import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage'
import WebLayout from './web-layout/WebLayout'
import ErrorPage from '@/pages/ErrorPage'
import BookSummariesPage from '@/pages/book-summaries/BookSummariesPage'
import SummaryPage from '@/pages/book-summaries/SummaryPage'

const BrowserRouter = createBrowserRouter([
	{
		path: '/',
		element: <WebLayout />,
		children: [
			{
				path: '',
				element: <LandingPage />,
			},
			{
				path: 'book-summaries',
				element: <BookSummariesPage />,
			},
			{
				path: 'book-summaries/:summaryId',
				element: <SummaryPage />,
			},
		],
		errorElement: <ErrorPage />,
	},
])

export default BrowserRouter
