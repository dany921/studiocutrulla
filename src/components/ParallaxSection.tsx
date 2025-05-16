
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  backgroundImage: string;
  height?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children: ReactNode;
  className?: string;
}

const ParallaxSection = ({
  backgroundImage,
  height = 'h-[50vh]',
  overlay = true,
  overlayOpacity = 50,
  children,
  className,
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollPosition = window.pageYOffset;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Only apply parallax if the section is in view
      if (
        scrollPosition + window.innerHeight >= sectionTop &&
        scrollPosition <= sectionTop + sectionHeight
      ) {
        // Calculate the parallax effect
        const yValue = (scrollPosition - sectionTop) * 0.5;
        sectionRef.current.style.backgroundPositionY = `calc(50% + ${yValue}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        height,
        'relative flex items-center justify-center bg-cover bg-center bg-no-repeat',
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {overlay && (
        <div
          className="absolute inset-0 bg-accountBlue-dark"
          style={{ opacity: overlayOpacity / 100 }}
        />
      )}
      <div className="relative z-10 container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
