'use client';

import { useEffect, useRef } from 'react';

export function Counter({
  target,
  duration = 1200,
  thousandSeparator = false,
}: {
  target: number;
  duration?: number;
  thousandSeparator?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const format = (n: number) =>
      thousandSeparator ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.') : String(n);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = format(Math.round(target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, thousandSeparator]);
  return <span ref={ref}>0</span>;
}