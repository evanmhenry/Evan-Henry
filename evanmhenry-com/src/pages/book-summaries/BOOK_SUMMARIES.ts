import { AtomicHabitsContent } from './books/AtomicHabitsContent'

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
}

export type BookSummary = {
	summaryId: string
	book: Book
}

export const bookSummariesList = Object.keys(BOOK_SUMMARIES).map((key) => ({
	summaryId: key,
	...BOOK_SUMMARIES[key],
}))

