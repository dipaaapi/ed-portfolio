import { useId } from 'react'
import { cn } from './ui'

// Brand: EdMaster28 (Ed's online identity), drawn as the code tag <ED!>.
// The exclamation mark's stroke is the word MASTER standing vertically; its point is a red 28.
// Animation loop: the brackets squeeze in and squish ED!, then release, and the 28 pulses
// with a warning ripple.
const font = { fontFamily: 'var(--font-main), Orbitron, sans-serif' };

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
    </defs>
);

// Landscape logo: one wide glass pill with <ED!>.
const BrandLogo = ({ className, animated = true }: { className?: string; animated?: boolean }) => {
    const id = useId().replace(/:/g, '');
    return (
        <svg viewBox="0 0 156 56" className={cn('h-11 w-auto overflow-visible', animated && 'brand-animated', className)} role="img" aria-label="EdMaster28">
            <GlassDefs id={id} />
            <clipPath id={`clip${id}`}><rect width="156" height="56" rx="16" /></clipPath>
            <g clipPath={`url(#clip${id})`}>
                <rect width="156" height="56" fill={`url(#bg${id})`} />
                <rect width="156" height="56" fill={`url(#glow${id})`} />
                <path d="M0 18.5H156M0 37.5H156M39 0V56M78 0V56M117 0V56" stroke="#fff" strokeOpacity="0.05" />
                {/* warning ripple from the 28 */}
                <circle className="brand-ripple" cx="117.5" cy="46.5" r="5" fill="none" stroke="#ef4444" strokeWidth="1.5" />
            </g>
            <rect x="0.75" y="0.75" width="154.5" height="54.5" rx="15.25" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.5" />

            {/* < and > */}
            <g fill="none" stroke="#fff" strokeOpacity="0.75" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path className="brand-bracket-l" d="M22 16 12 28l10 12" />
                <path className="brand-bracket-r" d="M134 16l10 12-10 12" />
            </g>

            {/* ED! */}
            <g className="brand-word">
                <text x={30} y={44} fontSize={36} fontWeight={900} fill="#fff" textLength={74} lengthAdjust="spacingAndGlyphs" style={font}>ED</text>
                <text transform="translate(113 10) rotate(90)" fontSize={10.5} fontWeight={900} fill="#fff" fillOpacity="0.9" textLength={29} lengthAdjust="spacingAndGlyphs" style={font}>MASTER</text>
                <text className="brand-dot" x={112} y={50} fontSize={8.5} fontWeight={900} fill="#ef4444" textLength={11} lengthAdjust="spacingAndGlyphs" style={font}>28</text>
            </g>
        </svg>
    );
};

// Square mark for favicons and app icons: the same glass tile with a compact <!> (MASTER stroke, 28 point).
export const BrandMark = ({ className = 'w-10 h-10' }: { className?: string }) => {
    const id = useId().replace(/:/g, '');
    return (
        <svg viewBox="0 0 64 64" className={className} role="img" aria-label="EdMaster28">
            <GlassDefs id={id} />
            <rect width="64" height="64" rx="16" fill={`url(#bg${id})`} />
            <rect width="64" height="64" rx="16" fill={`url(#glow${id})`} />
            <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.5" />
            <g fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 18 9 32l11 14" />
                <path d="M44 18l11 14-11 14" />
            </g>
            <rect x="28.5" y="14" width="7" height="26" rx="3.5" fill="#fff" />
            <circle cx="32" cy="48" r="4.5" fill="#ef4444" />
        </svg>
    );
};

export default BrandLogo;
