import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "motion/react";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function StatsCounter({ end, suffix = "", duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - progress / duration, 4);
      
      const currentCount = Math.min(Math.floor(easeOut * end), end);
      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}
