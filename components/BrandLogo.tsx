import { useId } from 'react'
import { cn } from './ui'

// Brand mark: code brackets < > (ElevatED by Code) around a pen nib (IllustratED by Design),
// on the same slate-to-red glass tile as the page banners.
export const BrandMark = ({ className = 'w-10 h-10', animated = false }: { className?: string; animated?: boolean }) => {
    const id = useId().replace(/:/g, '');
    return (
        <svg viewBox="0 0 64 64" className={cn(className, animated && 'brand-animated')} aria-hidden="true">
            <defs>
                <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#111827" />
                    <stop offset="0.55" stopColor="#1e293b" />
                    <stop offset="1" stopColor="#7f1d1d" />
                </linearGradient>
                <radialGradient id={`glow${id}`} cx="0.2" cy="0.15" r="0.65">
                    <stop offset="0" stopColor="#dc2626" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#dc2626" stopOpacity="0" />
                </radialGradient>
                <linearGradient id={`nib${id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#f87171" />
                    <stop offset="1" stopColor="#e11d48" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill={`url(#bg${id})`} />
            <rect width="64" height="64" rx="16" fill={`url(#glow${id})`} />
            <path d="M0 21.5H64M0 42.5H64M21.5 0V64M42.5 0V64" stroke="#fff" strokeOpacity="0.06" />
            <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.5" />
            <g fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                <path className="brand-bracket-l" d="M20 20 11 32l9 12" />
                <path className="brand-bracket-r" d="M44 20l9 12-9 12" />
            </g>
            <g className="brand-nib">
                <path d="M32 15l8 17-8 17-8-17z" fill={`url(#nib${id})`} />
                <path d="M32 31.5V45" stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="32" cy="29.5" r="2.4" fill="#1e293b" />
            </g>
        </svg>
    );
};

type BrandLogoProps = {
    tone?: 'dark' | 'light';
    animated?: boolean;
    showTagline?: boolean;
    className?: string;
};

// Landscape logo: mark + wordmark. Real text, so it stays crisp and readable by search engines.
const BrandLogo = ({ tone = 'dark', animated = true, showTagline = true, className }: BrandLogoProps) => (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
        <BrandMark animated={animated} className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 drop-shadow-md" />
        <span className="flex flex-col leading-none">
            <span className={cn('text-sm sm:text-base font-black uppercase tracking-tight whitespace-nowrap', tone === 'dark' ? 'text-gray-900' : 'text-white')}>
                Ed<span className="text-red-600">.</span>Cabrera
                {animated && <span aria-hidden="true" className="inline-block w-[2px] h-[0.85em] bg-red-500 ml-1 align-[-0.1em] caret-blink"></span>}
            </span>
            {showTagline && (
                <span className={cn('mt-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.25em] whitespace-nowrap', tone === 'dark' ? 'text-gray-500' : 'text-gray-300')}>
                    Code <span className="text-red-500">&lt;/&gt;</span> Design
                </span>
            )}
        </span>
    </span>
);

export default BrandLogo;
