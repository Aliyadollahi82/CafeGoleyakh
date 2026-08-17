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

  return (
    <button
      id="topBtn"
      className={`fixed bottom-[25px] left-[25px] w-[50px] h-[50px] rounded-full bg-primary text-white justify-center items-center text-xl shadow-[var(--color-card-shadow)] z-[999] transition-all duration-300 hover:-translate-y-[5px] ${
        show ? "flex" : "hidden"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="بازگشت به بالا"
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}
