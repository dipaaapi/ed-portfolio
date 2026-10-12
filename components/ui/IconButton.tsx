import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from './cn'

type IconButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'children'> & {
    label: string;
    children: ReactNode;
    tone?: 'light' | 'dark';
    href?: string;
};

const tones = {
    light: 'text-gray-400 hover:text-red-500 hover:bg-gray-900/5',
    dark: 'text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md shadow-lg hover:scale-110',
};

// Square-ish icon-only control (modal close, social links). `label` becomes the accessible name.
const IconButton = ({ label, children, tone = 'light', href, className, type = 'button', ...rest }: IconButtonProps) => {
    const classes = cn('inline-flex items-center justify-center p-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500', tones[tone], className);
    if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={classes}>{children}</a>;
    }
    return <button type={type} aria-label={label} title={label} className={classes} {...rest}>{children}</button>;
};

export const CloseIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
);

export const ArrowRightIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
);

export const ExternalIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
);

export default IconButton;
