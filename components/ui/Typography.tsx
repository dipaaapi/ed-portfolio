import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from './cn'

type Tone = 'dark' | 'light';

const headingSizes = {
    display: 'text-4xl sm:text-6xl lg:text-7xl tracking-tighter leading-none',
    xl: 'text-3xl lg:text-5xl tracking-tight',
    lg: 'text-2xl sm:text-3xl tracking-tight',
    md: 'text-lg sm:text-xl tracking-tight',
    sm: 'text-sm tracking-widest',
};

type HeadingProps = ComponentPropsWithoutRef<'h2'> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    size?: keyof typeof headingSizes;
    tone?: Tone;
};

// Every title on the site: bold, uppercase Orbitron.
export const Heading = ({ as: Tag = 'h2', size = 'lg', tone = 'dark', className, ...rest }: HeadingProps) => (
    <Tag className={cn('font-black uppercase', headingSizes[size], tone === 'dark' ? 'text-gray-900' : 'text-white', className)} {...rest} />
);

const textVariants = {
    body: 'text-sm sm:text-base leading-relaxed',
    small: 'text-xs leading-relaxed',
    lead: 'text-base sm:text-lg leading-relaxed',
    quote: 'text-sm italic leading-loose',
    caption: 'text-[10px] font-bold uppercase tracking-widest',
};

type TextProps = ComponentPropsWithoutRef<'p'> & {
    as?: ElementType;
    variant?: keyof typeof textVariants;
    tone?: Tone;
};

// Paragraph text. `tone` picks the colour for light or dark backgrounds.
export const Text = ({ as: Tag = 'p', variant = 'body', tone = 'dark', className, ...rest }: TextProps) => (
    <Tag className={cn(textVariants[variant], tone === 'dark' ? 'text-gray-500' : 'text-gray-300', className)} {...rest} />
);

// Section accent colours. Red is the brand; the others theme individual sections (web stack, anime, manga...).
export type Accent = 'red' | 'blue' | 'purple' | 'indigo' | 'emerald' | 'gray';

const accentBar: Record<Accent, string> = {
    red: 'bg-red-500 shadow-red-500/30',
    blue: 'bg-blue-500 shadow-blue-500/30',
    purple: 'bg-purple-500 shadow-purple-500/30',
    indigo: 'bg-indigo-500 shadow-indigo-500/30',
    emerald: 'bg-emerald-500 shadow-emerald-500/30',
    gray: 'bg-gray-300 shadow-gray-300/30',
};

const accentText: Record<Accent, [string, string]> = {
    // [on light background, on dark background]
    red: ['text-red-500', 'text-red-400'],
    blue: ['text-blue-500', 'text-blue-400'],
    purple: ['text-purple-600', 'text-purple-300'],
    indigo: ['text-indigo-600', 'text-indigo-300'],
    emerald: ['text-emerald-600', 'text-emerald-400'],
    gray: ['text-gray-400', 'text-gray-400'],
};

// The accent bar under section titles.
export const AccentBar = ({ accent = 'red', className }: { accent?: Accent; className?: string }) => (
    <span aria-hidden="true" className={cn('block h-1.5 w-24 rounded-full shadow-lg', accentBar[accent], className)} />
);

type SectionHeadingProps = {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    tone?: Tone;
    accent?: Accent;
    align?: 'center' | 'left' | 'responsive';
    size?: 'xl' | 'lg';
    as?: 'h1' | 'h2' | 'h3';
    className?: string;
};

const alignClasses = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    // centered on mobile, left from lg up
    responsive: 'items-center text-center lg:items-start lg:text-left',
};

// Eyebrow + title + accent bar + optional intro, the header used by every page section.
export const SectionHeading = ({ eyebrow, title, description, tone = 'dark', accent = 'red', align = 'center', size = 'xl', as = 'h2', className }: SectionHeadingProps) => (
    <div className={cn('flex flex-col', alignClasses[align], className)}>
        {eyebrow && <span className={cn('font-bold tracking-[0.4em] uppercase text-[10px] mb-3', accentText[accent][tone === 'dark' ? 0 : 1])}>{eyebrow}</span>}
        <Heading as={as} size={size} tone={tone}>{title}</Heading>
        <AccentBar accent={accent} className="mt-5" />
        {description && <Text variant="quote" tone={tone} className="mt-6 max-w-2xl">{description}</Text>}
    </div>
);
