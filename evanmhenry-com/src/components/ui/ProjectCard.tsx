import { ArrowUpRight } from 'lucide-react'

type ProjectCardProps = {
	title: string
	description: string
	url: string
	status?: string
	image: string
}

const ProjectCard = ({ title, description, url, image }: ProjectCardProps) => {
	return (
		<a href={url} className='border border-zinc-700 rounded-xl p-6 bg-custom-gradient shadow-custom flex flex-col gap-6 hover:opacity-90'>
			<div>
				<img src={image} alt={title} className='h-8' />
			</div>
			<div className='flex flex-col gap-1 text-sm text-zinc-500'>
				<div className='flex'>
					<span className='text-xl font-semibold text-primary'>{title}</span>
					<ArrowUpRight size={12} />
				</div>
				{description}
			</div>
		</a>
	)
}

export default ProjectCard

