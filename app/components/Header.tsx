"use client";

import React from "react";

interface HeaderProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Header({
  activeCategory,
  onSelectCategory,
}: HeaderProps) {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    cat: string
  ) => {
    e.preventDefault();
    onSelectCategory(cat);
    const target = document.getElementById("products");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-4 py-4.5 sm:flex-row">
        <div className="flex items-center gap-3 text-2xl font-bold text-[#4fc3f7]">
          <i className="fa-solid fa-ice-cream" />
          <span>گل یخ</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 font-semibold">
          <a href="#home" className="transition-colors hover:text-[#4fc3f7]">
            خانه
          </a>
          <a
            href="#products"
            onClick={(e) => handleNavClick(e, "all")}
            className={`transition-colors hover:text-[#4fc3f7] ${
              activeCategory === "all" ? "text-[#4fc3f7]" : ""
            }`}
          >
            منو
          </a>
          <a
            href="#products"
            onClick={(e) => handleNavClick(e, "icecream")}
            className={`transition-colors hover:text-[#4fc3f7] ${
              activeCategory === "icecream" ? "text-[#4fc3f7]" : ""
            }`}
          >
            بستنی
          </a>
          <a
            href="#products"
            onClick={(e) => handleNavClick(e, "shake")}
            className={`transition-colors hover:text-[#4fc3f7] ${
              activeCategory === "shake" ? "text-[#4fc3f7]" : ""
            }`}
          >
            میلک شیک
          </a>
          <a
            href="#products"
            onClick={(e) => handleNavClick(e, "cake")}
            className={`transition-colors hover:text-[#4fc3f7] ${
              activeCategory === "cake" ? "text-[#4fc3f7]" : ""
            }`}
          >
            دسر
          </a>
          <a href="#special" className="transition-colors hover:text-[#4fc3f7]">
            ویژه
          </a>
        </nav>
      </div>
    </header>
  );
}