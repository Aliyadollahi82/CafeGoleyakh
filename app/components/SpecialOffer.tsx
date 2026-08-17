"use client";

import { SyntheticEvent } from "react";
import { Product } from "../types/product";

interface SpecialOfferProps {
  onOrderSpecial: (product: Product) => void;
}

export default function SpecialOffer({ onOrderSpecial }: SpecialOfferProps) {
  const specialProduct: Product = {
    id: 8,
    name: "جام مخصوص گل یخ",
    category: "cake",
    price: "۱۸۵,۰۰۰ تومان",
    description: "ترکیبی از سه اسکوپ بستنی، خامه، میوه تازه، شکلات و کارامل.",
    image: "/images/special.png",
    badge: "ویژه",
  };

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/no-image.png";
  };

  return (
    <section id="special" className="special-section">
      <div className="special-container">
        <div className="special-image">
          <img
            src={specialProduct.image}
            alt="جام مخصوص گل یخ"
            onError={handleImageError}
          />
        </div>
        <div className="special-content">
          <span className="special-tag">⭐ پیشنهاد ویژه امروز</span>
          <h2>{specialProduct.name}</h2>
          <p>
            ترکیبی از سه اسکوپ بستنی، میوه تازه، سس شکلات، سس کارامل، خامه فرم
            گرفته و بیسکویت شکلاتی.
          </p>
          <div className="special-price">{specialProduct.price}</div>
          <button
            className="special-btn"
            onClick={() => onOrderSpecial(specialProduct)}
          >
            🛒 سفارش ویژه
          </button>
        </div>
      </div>
    </section>
  );
}