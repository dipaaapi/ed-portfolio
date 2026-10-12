import { useEffect } from 'react'

// Global rule: while any modal is open, the page behind it must not scroll.
// Counts active locks so nested/overlapping modals release correctly, and pads the body by the
// scrollbar width so the layout doesn't jump when the scrollbar disappears.
let locks = 0;
let saved: { overflow: string; paddingRight: string } | null = null;

export default function useScrollLock(locked: boolean) {
    useEffect(() => {
        if (!locked) return;
        const body = document.body;
        if (locks === 0) {
            saved = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };
            const scrollbar = window.innerWidth - document.documentElement.clientWidth;
            body.style.overflow = 'hidden';
            if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
        }
        locks++;
        return () => {
            locks--;
            if (locks === 0 && saved) {
                body.style.overflow = saved.overflow;
                body.style.paddingRight = saved.paddingRight;
                saved = null;
            }
        };
    }, [locked]);
}
