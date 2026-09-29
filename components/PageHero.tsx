import { ReactNode } from 'react'

type PageHeroProps = {
    eyebrow: string;
    title: string;
    subtitle?: string;
    // Optional small visual above the eyebrow, e.g. a profile photo.
    avatar?: ReactNode;
    // Optional compact extras under the subtitle (chips, stats). Keep them to one or two short rows
    // so every page's banner stays the same height.
    children?: ReactNode;
    // Optional glass search bar, rendered inside the banner so nothing has to overlap its curved edge.
    search?: {
        value: string;
        onChange: (value: string) => void;
        placeholder: string;
    };
};

// Shared page banner: same height, brand gradient and glass styling on every page,
// matching the glassmorphism navbar.
const PageHero = ({ eyebrow, title, subtitle, avatar, children, search }: PageHeroProps) => (
    <header className="hero-curve relative -mt-20 pt-20 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-red-900 text-white shadow-2xl">
        {/* Glow orbs + fine grid give the glass elements something to blur */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-24 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        ></div>

        <div className="relative z-10 w-11/12 md:w-10/12 mx-auto min-h-[24rem] md:min-h-[30rem] flex flex-col items-center justify-center text-center pt-8 pb-16 md:pb-20">
            {avatar && <div className="mb-4">{avatar}</div>}
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] bg-white/10 border border-white/25 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">{eyebrow}</span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter drop-shadow-2xl">{title}</h1>
            <div className="h-1.5 w-24 sm:w-32 bg-red-500 rounded-full mt-5 shadow-lg shadow-red-500/50"></div>
            {subtitle && (
                <p className="mt-5 text-xs sm:text-base font-light tracking-[0.25em] sm:tracking-[0.35em] text-gray-200 uppercase max-w-3xl">{subtitle}</p>
            )}
            {children && <div className="mt-8 w-full">{children}</div>}

            {search && (
                <div className="mt-8 w-full max-w-2xl flex items-center gap-2 p-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-xl backdrop-saturate-150 shadow-2xl shadow-black/20 transition-colors focus-within:bg-white/15 focus-within:border-white/50">
                    <div className="p-2.5 sm:p-3 rounded-full bg-white/10 text-white flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input
                        type="text"
                        aria-label={search.placeholder}
                        placeholder={search.placeholder}
                        value={search.value}
                        onChange={(e) => search.onChange(e.target.value)}
                        className="w-full min-w-0 bg-transparent border-none outline-none text-white placeholder-white/50 text-sm sm:text-base font-semibold tracking-wide px-1 py-2"
                    />
                    {search.value && (
                        <button onClick={() => search.onChange('')} className="mr-1 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors flex-shrink-0" aria-label="Clear search">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    )}
                </div>
            )}
        </div>
    </header>
);

export default PageHero;
