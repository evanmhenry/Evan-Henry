import { AtomicHabitsContent } from './summaries/AtomicHabitsContent'
import { ExtremeOwnershipContent } from './summaries/ExtremeOwnershipContent'
import { HowToWinFriendsContent } from './summaries/HowToWinFriendsContent'

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
	'3': {
		title: 'Extreme Ownership',
		author: 'Jocko Willink and Leif Babin',
		category: 'Leadership',
		content: ExtremeOwnershipContent,
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

