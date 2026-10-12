import { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from './cn'

const variants = {
    surface: 'bg-white border border-gray-100 shadow-xl',
    glass: 'bg-white/5 border border-white/15 backdrop-blur-lg text-white',
    dark: 'bg-gray-900 text-white shadow-xl',
    muted: 'bg-gray-50 border border-gray-100',
};

type CardProps = ComponentPropsWithoutRef<'div'> & {
    as?: ElementType;
    variant?: keyof typeof variants;
    interactive?: boolean;
};

// Rounded content surface. `interactive` adds the lift-on-hover used by clickable cards.
const Card = ({ as: Tag = 'div', variant = 'surface', interactive = false, className, ...rest }: CardProps) => (
    <Tag
        className={cn(
            'rounded-[2rem] p-6 sm:p-8',
            variants[variant],
            interactive && 'transition-all duration-500 hover:shadow-2xl hover:-translate-y-1',
            className,
        )}
        {...rest}
    />
);

export default Card;
