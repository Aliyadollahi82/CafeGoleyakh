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
      className={show ? "show" : ""}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="بازگشت به بالا"
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}