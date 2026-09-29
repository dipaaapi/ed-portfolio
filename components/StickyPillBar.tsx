type StickyPillBarProps = {
    items: { id: string; label: string }[];
    active: string;
    onSelect: (id: string) => void;
    className?: string;
};

// Sticky glass pill bar that sits just under the navbar. Uses the navbar's exact width rules
// (px-3 sm:px-4 outer padding, max-w-7xl inner) so the two bars line up edge to edge.
const StickyPillBar = ({ items, active, onSelect, className = '' }: StickyPillBarProps) => (
    <div className={`sticky top-[5.5rem] z-40 px-3 sm:px-4 ${className}`}>
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto p-1.5 rounded-2xl bg-white/70 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-lg shadow-gray-900/5 lg:justify-center">
            {items.map(({ id, label }) => (
                <button
                    key={id}
                    onClick={() => onSelect(id)}
                    aria-pressed={active === id}
                    className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${active === id ? 'bg-red-600 text-white shadow-md' : 'text-gray-500 hover:bg-white hover:text-gray-900'}`}
                >
                    {label}
                </button>
            ))}
        </div>
    </div>
);

export default StickyPillBar;
