import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/NavigationMenu'
import DarkLogo from '@/assets/evanmhenry-logo-dark.svg'
import type { Dispatch, SetStateAction } from 'react'
import { GitHubIcon, InstagramIcon, TwitterIcon } from '@/components/ui/SocialIcon'

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
	{ name: 'GitHub', icon: <GitHubIcon link='https://www.github.com/evanmhenry' /> },
	{ name: 'Twitter', icon: <TwitterIcon link='https://www.twitter.com/evanmhenry1' /> },
	{ name: 'Instagram', icon: <InstagramIcon link='https://www.instagram.com/evanmhenry' /> },
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
							<div className='flex gap-1 ml-[-10px]'>{socials.map((social) => social.icon)}</div>
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
