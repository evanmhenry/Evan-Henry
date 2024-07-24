import { AtomicHabitsContent } from './books/AtomicHabitsContent'
import { HowToWinFriendsContent } from './books/HowToWinFriendsContent'

export type Book = {
	title: string
	author: string
	category: string
	content: string
}

export const BOOK_SUMMARIES: { [key: string]: Book } = {
	'1': {
		title: 'Atomic Habits',
		author: 'James Clear',
		category: 'Self-Improvement',
		content: AtomicHabitsContent,
	},
	'2': {
		title: 'How to Win Friends and Influence People',
		author: 'Dale Carnegie',
		category: 'Self-Improvement',
		content: HowToWinFriendsContent,
	},
}

export type BookSummary = {
	summaryId: string
	book: Book
}

export const bookSummariesList = Object.keys(BOOK_SUMMARIES).map((key) => ({
	summaryId: key,
	...BOOK_SUMMARIES[key],
}))

