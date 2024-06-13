import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/NavigationMenu'
import DarkLogo from '@/assets/evanmhenry-logo-dark.svg'
import InstagramDark from '@/assets/instagram-dark.svg'
import TwitterDark from '@/assets/twitter-dark.svg'
import GitHubDark from '@/assets/github-dark.svg'
import type { Dispatch, SetStateAction } from 'react'

type HeaderProps = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const navOptions = [
	{ name: 'My Work', path: '/works' },
	// { name: 'Guides', path: '/blog' },
	// { name: 'Book Summaries', path: '/book-summaries' },
	// { name: 'Writing', path: '/writing' },
]

const socials = [
	{ name: 'Instagram', icon: InstagramDark, link: 'https://www.instagram.com/evanmhenry/' },
	{ name: 'Twitter', icon: TwitterDark, link: 'https://twitter.com/evanmhenry' },
	{ name: 'GitHub', icon: GitHubDark, link: 'https://github.com/evanmhenry' },
]

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
	return (
		<header className={`z-50 fixed top-0 w-full border-b transition-all duration-300 bg-background ${isOpen ? 'h-screen' : 'h-16'}`}>
			<div className='container max-w-screen-2xl'>
				<div className='flex justify-between w-full items-center h-16'>
					<a href='/'>
						<img alt='Logo' className='h-8 flex-none hover:cursor-pointer' src={DarkLogo} />
					</a>
					<HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} className='md:hidden' />
					<div className='hidden md:flex gap-4'>
						<NavigationMenu>
							<NavigationMenuList>
								{navOptions.map((item) => (
									<NavigationMenuItem>
										<Link to={item.path}>
											<NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.name}</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
				<div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-full' : 'hidden'} w-full gap-4 pt-6 bg-background`}>
					<div className='flex flex-col gap-10'>
						{/* <Button size='lg'>Contact</Button> */}
						<div className='flex gap-6'>
							{socials.map((social) => (
								<a href={social.link} target='_blank' rel='noopener noreferrer'>
									<img src={social.icon} alt={social.name} className='h-8 w-8 scale-90 transition-transform duration-300 ease-in-out hover:opacity-75 hover:scale-100' />
								</a>
							))}
						</div>
						<div className='flex flex-col gap-6'>
							{navOptions.map((item) => (
								<Link to={item.path} className='hover:text-muted-foreground'>
									<h3 className='text-lg'>{item.name}</h3>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
