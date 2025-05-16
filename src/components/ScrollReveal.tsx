
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'bottom' | 'left' | 'right';
  delay?: number;
}

const ScrollReveal = ({
  children,
  className,
  direction = 'bottom',
  delay = 0,
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const directionClass = {
    bottom: 'reveal-bottom',
    left: 'reveal-left',
    right: 'reveal-right',
  };

  return (
    <div
      ref={elementRef}
      className={cn('reveal', directionClass[direction], className)}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
