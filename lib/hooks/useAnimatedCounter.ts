"use client";

import { useEffect, useRef, useState } from "react";

interface UseAnimatedCounterOptions {
  /** The final value to count to */
  end: number;
  /** Duration of the animation in ms (default: 2000) */
  duration?: number;
  /** Start counting only when in view (default: true) */
  startOnView?: boolean;
  /** Prefix string (e.g., "~") */
  prefix?: string;
  /** Suffix string (e.g., "%", "+") */
  suffix?: string;
  /** Number of decimal places */
  decimals?: number;
}

export function useAnimatedCounter({
  end,
  duration = 2000,
  startOnView = true,
  prefix = "",
  suffix = "",
  decimals = 0,
}: UseAnimatedCounterOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  const displayValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { ref, displayValue, count, hasStarted };
}
