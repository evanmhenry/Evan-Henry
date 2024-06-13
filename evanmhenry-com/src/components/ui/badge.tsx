import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export enum BadgeVariant {
	Building = 'orange',
	ComingSoon = 'default',
}

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-zinc-800 text-zinc-400 hover:bg-primary/80',
				orange: 'border-transparent bg-orange-900/50 text-orange-500 hover:bg-secondary/80',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
