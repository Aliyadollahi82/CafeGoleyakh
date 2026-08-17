"use client";

import { useEffect, useRef } from "react";

export default function RevealOnScroll() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const cards = document.querySelectorAll("[data-reveal]");

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-show", "");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observerRef.current?.observe(card));

    return () => observerRef.current?.disconnect();
  }, []);

  return null;
}
