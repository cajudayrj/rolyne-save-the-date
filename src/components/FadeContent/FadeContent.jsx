"use client";
import { useRef, useEffect, useState } from 'react';

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = 'ease-out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = '',
  startOnVisible = true,
  initialYPosition = 0,
}) => {
  const [isVisible, setIsVisible] = useState(!startOnVisible);

  const ref = useRef(null);

  useEffect(() => {
    if (!startOnVisible || !ref.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${isVisible ? 0 : initialYPosition}px)`,
        opacity: isVisible ? 1 : initialOpacity,
        transition: `all ${duration}ms ${easing}`,
        filter: blur ? (isVisible ? 'blur(0px)' : 'blur(10px)') : 'none'
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
