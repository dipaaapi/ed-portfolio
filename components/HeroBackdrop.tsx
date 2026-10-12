import { useEffect, useRef } from 'react'

// Brand banner background: glow orbs + fine grid that drift with the mouse (parallax).
// Render it as the first child of a `relative overflow-hidden` section. It listens on that parent,
// writes CSS variables instead of React state (no re-renders), and stays still for touch-only
// devices and prefers-reduced-motion.
const HeroBackdrop = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        const host = el?.parentElement;
        if (!el || !host) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(hover: hover)').matches) return;

        let frame = 0;
        const onMove = (e: PointerEvent) => {
            const rect = host.getBoundingClientRect();
            // -1 .. 1 from the section's center
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                el.style.setProperty('--px', x.toFixed(3));
                el.style.setProperty('--py', y.toFixed(3));
            });
        };
        const onLeave = () => {
            cancelAnimationFrame(frame);
            el.style.setProperty('--px', '0');
            el.style.setProperty('--py', '0');
        };

        host.addEventListener('pointermove', onMove);
        host.addEventListener('pointerleave', onLeave);
        return () => {
            cancelAnimationFrame(frame);
            host.removeEventListener('pointermove', onMove);
            host.removeEventListener('pointerleave', onLeave);
        };
    }, []);

    return (
        <div ref={ref} aria-hidden="true" className="hero-parallax absolute inset-0 pointer-events-none">
            {/* Each layer moves by a different depth: red glow the most, grid the least. */}
            <div className="parallax-layer absolute -top-24 -left-24 w-96 h-96 bg-red-600/30 rounded-full blur-3xl" style={{ ['--depth' as string]: '60px' }}></div>
            <div className="parallax-layer absolute top-1/3 right-1/4 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl" style={{ ['--depth' as string]: '-45px' }}></div>
            <div className="parallax-layer absolute -bottom-40 -right-24 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-3xl" style={{ ['--depth' as string]: '-30px' }}></div>
            <div
                className="parallax-layer absolute -inset-8 opacity-[0.07]"
                style={{ ['--depth' as string]: '10px', backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)', backgroundSize: '48px 48px' }}
            ></div>
        </div>
    );
};

export default HeroBackdrop;
