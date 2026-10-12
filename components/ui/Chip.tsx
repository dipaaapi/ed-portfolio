import { ComponentPropsWithoutRef } from 'react'
import { cn } from './cn'

export type ChipVariant = 'glass' | 'red' | 'muted' | 'solid' | 'outline';

const variants: Record<ChipVariant, string> = {
    glass: 'bg-white/10 border border-white/25 backdrop-blur-md text-white',
    red: 'bg-red-600 text-white',
    muted: 'bg-gray-100 text-gray-500',
    solid: 'bg-gray-900 text-white',
    outline: 'bg-white border border-gray-200 text-gray-600',
};

type ChipProps = ComponentPropsWithoutRef<'span'> & { variant?: ChipVariant };

// Small uppercase pill for tags, dates, eyebrows and counters.
const Chip = ({ variant = 'muted', className, ...rest }: ChipProps) => (
    <span className={cn('inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full', variants[variant], className)} {...rest} />
);

type ToggleChipProps = ComponentPropsWithoutRef<'button'> & { active?: boolean; tone?: 'light' | 'dark' };

// Selectable pill (filters, role pickers).
export const ToggleChip = ({ active = false, tone = 'light', className, type = 'button', ...rest }: ToggleChipProps) => (
    <button
        type={type}
        aria-pressed={active}
        className={cn(
            'text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-300',
            tone === 'dark'
                ? (active ? 'bg-white text-red-600 border-white shadow-lg' : 'bg-white/5 text-gray-300 border-white/15 hover:bg-white/15')
                : (active ? 'bg-red-600 text-white border-red-600 shadow-md' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-900 hover:text-gray-900'),
            className,
        )}
        {...rest}
    />
);

export default Chip;
