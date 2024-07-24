type BookSummaryCardProps = {
	title: string
	author: string
	path: string
}

const BookSummaryCard = ({ title, author, path }: BookSummaryCardProps) => {
	return (
		<a href={path} className='flex bg-zinc-900 w-48 rounded-md border transform transition-transform duration-500' style={{ perspective: '1000px' }}>
			<div id='binding' className='w-6 h-60 bg-book-gradient opacity-book'></div>
			<div
				id='content'
				className='w-44 bg-custom-gradient p-4 pl-2 rounded-r flex flex-col justify-between'
				style={{ transformOrigin: 'left center', transition: 'transform 0.5s' }}
			>
				<div className='flex flex-col gap-1'>
					<div className='text-xl'>{title}</div>
				</div>
				<div className='text-zinc-500'>By {author}</div>
			</div>
		</a>
	)
}

export default BookSummaryCard

