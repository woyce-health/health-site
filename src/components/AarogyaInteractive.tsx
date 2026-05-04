'use client';

import { useEffect } from 'react';

export function AarogyaInteractive() {
  useEffect(() => {
    const nav = document.querySelector('#nav');

    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 8);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' },
    );

    for (const el of document.querySelectorAll('.reveal')) {
      observer.observe(el);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
