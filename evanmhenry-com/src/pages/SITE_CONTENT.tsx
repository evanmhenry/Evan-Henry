import SpadeImage from '@/assets/spade-software-icon.svg'
import BackOpsImage from '@/assets/backops-icon.svg'
import CratoProjectImage from '@/assets/crato-project-icon.svg'
import PayGridsImage from '@/assets/paygrids-icon.svg'
import { GitHubIcon, InstagramIcon, TwitterIcon } from '@/components/ui/SocialIcon'
import { Link } from 'react-router-dom'
import { bookSummariesList } from './book-summaries/BOOK_SUMMARIES'

export const SITE_NAME = 'Evan Henry'

export const NavMenuOptions = [
	// { name: 'My Work', path: '/works', type: Link },
	// { name: 'Guides', path: '/blog' },
	{ name: 'Book Summaries', path: '/book-summaries', type: Link },
	// { name: 'Writing', path: '/writing' },
]

export const projects = [
	{
		title: 'Spade Software',
		description: 'Software studio crafting tailored, high-performance, and intuitive solutions',
		url: 'https://spadehq.com',
		image: SpadeImage,
	},
	{
		title: 'BackOps',
		description: 'Event operations management software',
		url: 'https://backopslive.com',
		image: BackOpsImage,
	},
	{
		title: 'Crato Project',
		description: 'Principles, tactics, and tools to simplify becoming healthy',
		url: 'https://cratoproject.com/',
		image: CratoProjectImage,
	},
	{
		title: 'PayGrids',
		description: 'Tip pool management software ',
		url: 'https://paygrids.com/',
		image: PayGridsImage,
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

export const bookSummaries = bookSummariesList.slice(0, 5).map((book) => ({
	title: book.title,
	description: `A summary of ${book.title} by ${book.author}`,
	author: book.author,
	path: `/book-summaries/${book.summaryId}`,
}))

export const writing = [
	{
		title: 'The Power of Habit',
		description: 'A guide to building good habits and breaking bad ones',
		path: '/writing/the-power-of-habit',
	},
]

export const FooterSlogan = ''

export const FooterSections = [
	{
		title: 'Company',
		items: [
			{ label: 'About Us', link: '/about' },
			{ label: 'Contact', link: '/contact' },
		],
	},
]

export const SocialMediaLinks = [
	{ name: 'GitHub', icon: <GitHubIcon link='https://www.github.com/evanmhenry' /> },
	{ name: 'Twitter', icon: <TwitterIcon link='https://www.x.com/evanmhenry1' /> },
	{ name: 'Instagram', icon: <InstagramIcon link='https://www.instagram.com/evanmhenry' /> },
	// { name: 'Discord', icon: <DiscordIcon link='https://www.discord.com' /> },
	// { name: 'Facebook', icon: <FacebookIcon link='https://www.facebook.com' /> },
	// { name: 'YouTube', icon: <YouTubeIcon link='https://www.youtube.com' /> },
	// { name: 'Threads', icon: <ThreadsIcon link='https://www.threads.com' /> },
	// { name: 'LinkedIn', icon: <LinkedInIcon link='https://www.linkedin.com' /> },
	// { name: 'Dribbble', icon: <DribbbleIcon link='https://www.dribbble.com' /> },
	// { name: 'TikTok', icon: <TikTokIcon link='https://www.tiktok.com' /> },
]
