import Cell from '@/components/ui/DataTable/Cell'
import DataTable from '@/components/ui/DataTable/DataTable'
import { ColumnDef } from '@tanstack/react-table'
import { bookSummariesList, BookSummary } from './BOOK_SUMMARIES'
import { useNavigate } from 'react-router-dom'

const BookSummariesPage = () => {
	const navigate = useNavigate()

	const viewSummary = (row: BookSummary) => {
		navigate(`/book-summaries/${row.summaryId}`)
	}

	return (
		<div>
			<DataTable title='Book Summaries' data={bookSummariesList} columns={BookSummaryColumns()} onRowClick={viewSummary} />
		</div>
	)
}

export default BookSummariesPage

const BookSummaryColumns = (): ColumnDef<BookSummary>[] => [
	{
		accessorKey: 'title',
		header: 'Title',
		cell: ({ row }) => <Cell value={row.getValue('title')} />,
	},
	{
		accessorKey: 'author',
		header: 'Author',
		cell: ({ row }) => <Cell value={row.getValue('author')} />,
	},
	{
		accessorKey: 'category',
		header: 'Category',
		cell: ({ row }) => <Cell value={row.getValue('category')} />,
	},
]

