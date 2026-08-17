"use client";

import { useEffect } from "react";

export default function Snow() {
  useEffect(() => {
    const createSnow = () => {
      const snow = document.createElement("span");
      snow.className = "snow";
      snow.innerHTML = "❄";
      snow.style.left = Math.random() * 100 + "vw";
      snow.style.fontSize = 12 + Math.random() * 18 + "px";
      snow.style.animationDuration = 6 + Math.random() * 4 + "s";
      document.body.appendChild(snow);
      setTimeout(() => snow.remove(), 10000);
    };

    const interval = setInterval(createSnow, 700);
    return () => clearInterval(interval);
  }, []);

  return null;
}