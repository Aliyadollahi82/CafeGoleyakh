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
    <section
      id="special"
      className="bg-gradient-to-br from-[#dff6ff] to-white py-20"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <img
            src={specialProduct.image}
            alt={specialProduct.name}
            onError={handleImageError}
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
        <div>
          <span className="mb-5 inline-block rounded-full bg-amber-100 px-4 py-2 font-bold text-amber-700">
            ⭐ پیشنهاد ویژه امروز
          </span>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            {specialProduct.name}
          </h2>
          <p className="mb-6 text-lg text-gray-500 leading-relaxed">
            ترکیبی از سه اسکوپ بستنی، میوه تازه، سس شکلات، سس کارامل، خامه فرم
            گرفته و بیسکویت شکلاتی.
          </p>
          <div className="mb-6 text-3xl font-extrabold text-[#4fc3f7]">
            {specialProduct.price}
          </div>
          <button
            onClick={() => onOrderSpecial(specialProduct)}
            className="rounded-full bg-[#4fc3f7] px-8 py-3.5 text-lg text-white transition-all hover:-translate-y-1 hover:bg-[#29b6f6]"
          >
            🛒 سفارش ویژه
          </button>
        </div>
      </div>
    </section>
  );
}