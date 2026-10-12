import Link from 'next/link'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from './cn'

export type ButtonVariant = 'primary' | 'glass' | 'dark' | 'light' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base = 'inline-flex items-center justify-center gap-2 font-black uppercase tracking-widest rounded-full transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100';

const variants: Record<ButtonVariant, string> = {
    primary: 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30',
    glass: 'bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white shadow-lg',
    dark: 'bg-gray-900 hover:bg-red-600 text-white shadow-lg',
    light: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-900 shadow-md',
    outline: 'border-2 border-current text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white',
    ghost: 'text-gray-500 hover:text-gray-900 hover:bg-gray-900/5',
};

const sizes: Record<ButtonSize, string> = {
    sm: 'text-[10px] px-4 py-2',
    md: 'text-xs px-6 py-3.5',
    lg: 'text-sm px-8 py-4',
};

export const buttonClasses = (variant: ButtonVariant = 'primary', size: ButtonSize = 'md', fullWidth = false) =>
    cn(base, variants[variant], sizes[size], fullWidth && 'w-full');

type CommonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    icon?: ReactNode;
    iconRight?: ReactNode;
    className?: string;
    children?: ReactNode;
};

type AsButton = CommonProps & Omit<ComponentPropsWithoutRef<'button'>, keyof CommonProps> & { href?: undefined };
type AsLink = CommonProps & Omit<ComponentPropsWithoutRef<'a'>, keyof CommonProps | 'href'> & { href: string | { pathname: string; query?: Record<string, string> } };

export type ButtonProps = AsButton | AsLink;

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href) || href.endsWith('.pdf');

// One button for every call to action. Pass `href` to render a link (internal routes use next/link,
// external URLs and files open in a new tab); otherwise it renders a <button>.
const Button = (props: ButtonProps) => {
    const { variant, size, fullWidth, icon, iconRight, className, children, ...rest } = props;
    const classes = cn(buttonClasses(variant, size, fullWidth), className);
    const content = <>{icon}{children}{iconRight}</>;

    if (rest.href !== undefined) {
        const { href, ...anchorProps } = rest as AsLink;
        if (typeof href === 'string' && isExternal(href)) {
            return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...anchorProps}>{content}</a>;
        }
        return <Link href={href} className={classes} {...anchorProps}>{content}</Link>;
    }

    const { type = 'button', ...buttonProps } = rest as AsButton;
    return <button type={type} className={classes} {...buttonProps}>{content}</button>;
};

export default Button;
