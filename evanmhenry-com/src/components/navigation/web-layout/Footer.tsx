import { useNavigate } from 'react-router-dom'
import DarkLogo from '@/assets/brand/spade-software-logo-dark.svg'
import InstagramDark from '@/assets/social-icons/instagram-dark.svg'
import TwitterDark from '@/assets/social-icons/twitter-dark.svg'
import YouTubeDark from '@/assets/social-icons/youtube-dark.svg'
import GitHubDark from '@/assets/social-icons/github-dark.svg'

const Footer = () => {
	const navigate = useNavigate()

	return (
		<footer className='w-full border-t border-light/10'>
			<div className='container max-w-screen-2xl flex flex-col md:flex-row items-start py-12 gap-y-8 gap-x-4 md:gap-x-8 lg:gap-x-20 '>
				<div className='flex flex-col items-center w-full gap-y-8 flex-1 md:w-40 lg:w-60'>
					<img alt='Logo' className='h-8 flex-none hover:cursor-pointer' src={DarkLogo} onClick={() => navigate('/')} />
					<div className='flex gap-4'>
						<a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
							<img src={InstagramDark} alt='Instagram' className='h-5 w-5' />
						</a>
						<a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
							<img src={TwitterDark} alt='Twitter' className='h-5 w-5' />
						</a>
						<a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
							<img src={YouTubeDark} alt='YouTube' className='h-5 w-5' />
						</a>
						<a href='https://www.github.com/' target='_blank' rel='noopener noreferrer'>
							<img src={GitHubDark} alt='GitHub' className='h-5 w-5' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
