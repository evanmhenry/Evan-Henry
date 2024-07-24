import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { BOOK_SUMMARIES } from './BOOK_SUMMARIES'

const SummaryPage = () => {
	const { summaryId } = useParams<{ summaryId: string }>()

	const summary = summaryId ? BOOK_SUMMARIES[summaryId] : null

	return (
		<div className='container max-w-prose'>
			{summary ? (
				<>
					<div className='flex flex-col gap-1 my-8'>
						<div className='text-3xl font-semibold'>{summary.title}</div>
						<div className='text-lg text-muted-foreground'>By {summary.author}</div>
					</div>
					<ReactMarkdown>{summary.content}</ReactMarkdown>
				</>
			) : (
				<div>Summary not found</div>
			)}
		</div>
	)
}

export default SummaryPage

