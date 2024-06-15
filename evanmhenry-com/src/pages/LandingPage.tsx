import { works } from './Content'

const LandingPage = () => {
	return (
		<div className='flex flex-col container max-w-3xl gap-16 my-8'>
			<div className='flex flex-col gap-6 justify-center h-full w-full text-primary'>
				<h1 className='text-3xl font-semibold tracking'>My Work</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
					{works.map((work) => (
						<a
							href={work.url}
							className='p-6 flex flex-col gap-6 w-full max-w-96 min-w-80 justify-center rounded-2xl border bg-secondary/60 hover:bg-secondary hover:cursor-pointer'
						>
							<img src={work.image} alt={work.title} className='rounded-xl aspect-square object-cover' />
							<div className='flex flex-col gap-1'>
								<h1 className='text-2xl font-semibold tracking'>{work.title}</h1>
								<p className='text-muted-foreground'>{work.description}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default LandingPage
