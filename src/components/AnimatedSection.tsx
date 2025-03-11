import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const isBrowser = typeof window !== 'undefined';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: "fade-in-up" | "fade-in" | "none";
  once?: boolean;
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  animation = "fade-in-up",
  once = true,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isBrowser) return;

    let timeoutId: number;
    let observerRef: IntersectionObserver | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (once && sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observerRef = observer;

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      if (observerRef && sectionRef.current) {
        observerRef.unobserve(sectionRef.current);
        observerRef.disconnect();
      }
    };
  }, [delay, threshold, once]);

  const animationClass = animation === "fade-in-up" 
    ? "opacity-0 translate-y-8 transition-all duration-700" 
    : animation === "fade-in" 
    ? "opacity-0 transition-opacity duration-700" 
    : "";

  return (
    <div
      ref={sectionRef}
      className={cn(
        animationClass,
        isVisible && "opacity-100 translate-y-0",
        className,
        "will-change-transform will-change-opacity"
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;