"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeUpOnScrollProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function FadeUpOnScroll({
    children,
    delay = 0,
    className = ""
}: FadeUpOnScrollProps) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Check if element is already in viewport on mount
        const checkIfInView = () => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const isInView = rect.top <= windowHeight * 0.85 && rect.bottom >= 0;

            if (isInView) {
                setIsVisible(true);
                return true;
            }
            return false;
        };

        // Small delay to ensure DOM is ready and smooth scroll has settled
        const initialCheckTimer = setTimeout(() => {
            if (checkIfInView()) return;

            // Set up observer only if not already visible
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.15,
                    rootMargin: "0px 0px -100px 0px",
                }
            );

            observer.observe(element);

            return () => {
                observer.disconnect();
            };
        }, 100);

        return () => {
            clearTimeout(initialCheckTimer);
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-1000 ease-out ${className} ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
