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
    <header id="header">
      <div className="container">
        <div className="logo">
          <i className="fa-solid fa-ice-cream" />
          <span>گل یخ</span>
        </div>
        <nav>
          <a href="#home">خانه</a>
          <a
            href="#products"
            data-category="all"
            onClick={(e) => handleNavClick(e, "all")}
          >
            منو
          </a>
          <a
            href="#products"
            data-category="icecream"
            onClick={(e) => handleNavClick(e, "icecream")}
          >
            بستنی
          </a>
          <a
            href="#products"
            data-category="shake"
            onClick={(e) => handleNavClick(e, "shake")}
          >
            میلک شیک
          </a>
          <a
            href="#products"
            data-category="cake"
            onClick={(e) => handleNavClick(e, "cake")}
          >
            دسر
          </a>
          <a href="#special">ویژه</a>
        </nav>
      </div>
    </header>
  );
}