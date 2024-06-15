import SpadeImage from '@/assets/spadesoftware-application-icon.jpg'
import BackOpsImage from '@/assets/backops-application-icon.jpg'
import CratoProjectImage from '@/assets/cratoproject-application-icon.jpg'
import { BadgeVariant } from '@/components/ui/Enums'

export const works = [
	{
		title: 'Spade Software',
		description: 'Software studio crafting tailored, high-performance, and intuitive solutions',
		url: 'https://spadehq.com',
		status: 'Building...',
		variant: BadgeVariant.Building,
		image: SpadeImage,
	},
	{
		title: 'BackOps',
		description: 'Event operations management software',
		url: 'https://backopslive.com',
		status: 'Building...',
		variant: BadgeVariant.Building,
		image: BackOpsImage,
	},
	{
		title: 'Crato Project',
		description: 'Principles, tactics, and tools to simplify becoming healthy',
		url: 'https://cratoproject.com/',
		status: 'Coming Soon',
		variant: BadgeVariant.ComingSoon,
		image: CratoProjectImage,
	},
]

export const guides = [
	{
		title: 'Personal Finance Flowchart',
		description: 'A flowchart for managing your money',
		path: '/guides/finances',
		status: 'Coming soon...',
	},
	{
		title: 'Credit Cards',
		description: 'A guide for managing credit cards',
		path: '/guides/credit-cards',
		status: 'Coming soon...',
	},
]

export const bookSummaries = [
	{
		title: 'Atomic Habits',
		description: 'A guide to building good habits and breaking bad ones',
		path: '/book-summaries/atomic-habits',
	},
]

export const writing = [
	{
		title: 'The Power of Habit',
		description: 'A guide to building good habits and breaking bad ones',
		path: '/writing/the-power-of-habit',
	},
]
