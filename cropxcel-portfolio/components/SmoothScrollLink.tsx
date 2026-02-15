'use client';

import { MouseEvent } from 'react';

interface SmoothScrollLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function SmoothScrollLink({ href, children, className }: SmoothScrollLinkProps) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // Only handle hash links (anchor links)
        if (href.startsWith('#')) {
            e.preventDefault();

            // If href is just "#", scroll to top
            if (href === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                // Update URL to remove hash
                history.pushState(null, '', window.location.pathname);
                return;
            }

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Get the navbar height to offset the scroll
                const navbarHeight = 64; // 4rem = 64px (h-16)
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL hash without jumping
                history.pushState(null, '', href);
            }
        }
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}
