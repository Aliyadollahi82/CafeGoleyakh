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
    <header
      id="header"
      className="sticky top-0 bg-white shadow-[0_5px_20px_rgba(0,0,0,0.08)] z-[999]"
    >
      <div className="w-[min(1200px,92%)] mx-auto flex justify-between items-center py-[18px] max-[900px]:flex-col max-[900px]:gap-5">
        <div className="flex items-center gap-3 text-[28px] font-bold text-primary">
          <i className="fa-solid fa-ice-cream" />
          <span>گل یخ</span>
        </div>
        <nav className="flex gap-7 max-[900px]:flex-wrap max-[900px]:justify-center">
          <a
            href="#home"
            className="font-semibold relative transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:-bottom-1.5 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            خانه
          </a>
          <a
            href="#products"
            data-category="all"
            onClick={(e) => handleNavClick(e, "all")}
            className="font-semibold relative transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:-bottom-1.5 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            منو
          </a>
          <a
            href="#products"
            data-category="icecream"
            onClick={(e) => handleNavClick(e, "icecream")}
            className="font-semibold relative transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:-bottom-1.5 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            بستنی
          </a>
          <a
            href="#products"
            data-category="shake"
            onClick={(e) => handleNavClick(e, "shake")}
            className="font-semibold relative transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:-bottom-1.5 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            میلک شیک
          </a>
          <a
            href="#products"
            data-category="cake"
            onClick={(e) => handleNavClick(e, "cake")}
            className="font-semibold relative transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:-bottom-1.5 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            دسر
          </a>
          <a
            href="#special"
            className="font-semibold relative transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:-bottom-1.5 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            ویژه
          </a>
        </nav>
      </div>
    </header>
  );
}
