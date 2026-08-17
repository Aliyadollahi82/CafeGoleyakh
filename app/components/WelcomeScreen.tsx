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

  return (
    <section
      id="welcome"
      className={`fixed inset-0 w-full h-screen z-[9999] flex justify-center items-center transition-opacity duration-700 ${
        hide ? "opacity-0 invisible" : ""
      }`}
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/images/hero-bg.jpg') center/cover",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="relative text-center text-white">
        <h1 className="text-[58px] mb-[15px] font-extrabold">
          کافه بستنی گل یخ
        </h1>
        <p className="text-[22px] mb-[35px]">
          طعم خنکی که همیشه در خاطر می‌ماند
        </p>
        <button
          id="enterBtn"
          onClick={handleEnter}
          className="px-[38px] py-4 bg-primary text-white rounded-[50px] text-lg transition-all duration-300 shadow-[var(--color-card-shadow)] hover:-translate-y-1 hover:bg-primary-hover flex items-center gap-x-2 mx-auto"
        >
          ورود به منو
          <i className="fa-solid fa-arrow-left" />
        </button>
      </div>
    </section>
  );
}
