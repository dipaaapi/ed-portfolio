import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from './cn'

type TextLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
    href: string;
    tone?: 'red' | 'muted' | 'light';
};

const tones = {
    red: 'text-red-600 hover:text-red-500',
    muted: 'text-gray-500 hover:text-gray-900',
    light: 'text-gray-300 hover:text-white',
};

// Inline text link. External URLs open in a new tab; internal routes use next/link.
const TextLink = ({ href, tone = 'red', className, children, ...rest }: TextLinkProps) => {
    const classes = cn('font-bold underline-offset-4 hover:underline transition-colors', tones[tone], className);
    if (/^(https?:|mailto:|tel:)/.test(href)) {
        return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>{children}</a>;
    }
    return <Link href={href} className={classes} {...rest}>{children}</Link>;
};

export default TextLink;
