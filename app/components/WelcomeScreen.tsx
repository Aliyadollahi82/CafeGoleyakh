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
    <section id="welcome" className={hide ? "hide" : ""}>
      <div className="overlay" />
      <div className="welcome-content">
        <h1>کافه بستنی گل یخ</h1>
        <p>طعم خنکی که همیشه در خاطر می‌ماند</p>
        <button id="enterBtn" onClick={handleEnter}>
          ورود به منو
          <i className="fa-solid fa-arrow-left" />
        </button>
      </div>
    </section>
  );
}