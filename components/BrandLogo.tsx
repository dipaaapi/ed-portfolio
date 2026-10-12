import { useId } from 'react'
import { cn } from './ui'

// Brand: EdMaster28 (Ed's online identity). Read as "ED!": the exclamation mark's stroke is the word
// MASTER standing vertically and its point is a red 28.
const font = { fontFamily: 'var(--font-main), Orbitron, sans-serif' };

// Shared glass background used by both logo shapes: slate-to-red gradient, red glow, hairline border.
const GlassDefs = ({ id }: { id: string }) => (
    <defs>
        <linearGradient id={`bg${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#111827" />
            <stop offset="0.6" stopColor="#1e293b" />
            <stop offset="1" stopColor="#7f1d1d" />
        </linearGradient>
        <radialGradient id={`glow${id}`} cx="0.08" cy="0.1" r="0.7">
            <stop offset="0" stopColor="#dc2626" stopOpacity="0.55" />
            <stop offset="1" stopColor="#dc2626" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`shine${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
    </defs>
);

// Landscape logo (the main one): one wide glass pill, </> | ED!
const BrandLogo = ({ className, animated = true }: { className?: string; animated?: boolean }) => {
    const id = useId().replace(/:/g, '');
    return (
        <svg viewBox="0 0 184 56" className={cn('h-11 w-auto', animated && 'brand-animated', className)} role="img" aria-label="EdMaster28">
            <GlassDefs id={id} />
            <clipPath id={`clip${id}`}><rect width="184" height="56" rx="16" /></clipPath>
            <g clipPath={`url(#clip${id})`}>
                <rect width="184" height="56" fill={`url(#bg${id})`} />
                <rect width="184" height="56" fill={`url(#glow${id})`} />
                <path d="M0 18.5H184M0 37.5H184M46 0V56M92 0V56M138 0V56" stroke="#fff" strokeOpacity="0.05" />
                <rect className="brand-shine" x="-60" width="50" height="56" fill={`url(#shine${id})`} transform="skewX(-20)" />
            </g>
            <rect x="0.75" y="0.75" width="182.5" height="54.5" rx="15.25" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.5" />

            {/* </> glyph */}
            <g fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 20l-7 8 7 8" stroke="#fff" strokeOpacity="0.7" />
                <path d="M32 18l-5 20" stroke="#ef4444" />
                <path d="M38 20l7 8-7 8" stroke="#fff" strokeOpacity="0.7" />
            </g>
            <path d="M56 14V42" stroke="#fff" strokeOpacity="0.2" strokeWidth="1.5" />

            {/* ED */}
            <text x={66} y={44} fontSize={36} fontWeight={900} fill="#fff" textLength={74} lengthAdjust="spacingAndGlyphs" style={font}>ED</text>

            {/* ! — MASTER is the stroke (reads bottom to top), 28 is the point */}
            <text transform="translate(158 39) rotate(-90)" fontSize={10.5} fontWeight={900} fill="#fff" fillOpacity="0.9" textLength={29} lengthAdjust="spacingAndGlyphs" style={font}>MASTER</text>
            <text className="brand-dot" x={149} y={50} fontSize={8.5} fontWeight={900} fill="#ef4444" textLength={11} lengthAdjust="spacingAndGlyphs" style={font}>28</text>
        </svg>
    );
};

// Square mark for favicons and app icons: the same </> glyph as the landscape logo.
export const BrandMark = ({ className = 'w-10 h-10' }: { className?: string }) => {
    const id = useId().replace(/:/g, '');
    return (
        <svg viewBox="0 0 64 64" className={className} role="img" aria-label="EdMaster28">
            <GlassDefs id={id} />
            <rect width="64" height="64" rx="16" fill={`url(#bg${id})`} />
            <rect width="64" height="64" rx="16" fill={`url(#glow${id})`} />
            <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.5" />
            <g fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 20 11 32l11 12" stroke="#fff" />
                <path d="M36 16l-8 32" stroke="#ef4444" />
                <path d="M42 20l11 12-11 12" stroke="#fff" />
            </g>
        </svg>
    );
};

export default BrandLogo;
