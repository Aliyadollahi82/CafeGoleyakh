"use client";

import { useState } from "react";

interface WelcomeScreenProps {
  onEnter?: () => void;
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const [hide, setHide] = useState<boolean>(false);

  const handleEnter = () => {
    setHide(true);
    if (onEnter) onEnter();
  };

  if (hide) return null;

  return (
    <section className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center transition-opacity duration-700">
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-4 text-4xl font-extrabold sm:text-6xl">
          کافه بستنی گل یخ
        </h1>
        <p className="mb-8 text-lg sm:text-2xl">
          طعم خنکی که همیشه در خاطر می‌ماند
        </p>
        <button
          onClick={handleEnter}
          className="flex items-center gap-2 rounded-full bg-[#4fc3f7] px-8 py-4 text-lg text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-[#29b6f6]"
        >
          ورود به منو
          <i className="fa-solid fa-arrow-left" />
        </button>
      </div>
    </section>
  );
}