"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#4fc3f7] text-white shadow-xl transition-all hover:-translate-y-1"
      title="بازگشت به بالا"
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}