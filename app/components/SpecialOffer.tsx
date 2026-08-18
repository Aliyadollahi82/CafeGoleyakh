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
      className="py-[90px] bg-[linear-gradient(135deg,#dff6ff,#ffffff)]"
    >
      <div className="w-[min(1200px,92%)] mx-auto grid grid-cols-2 gap-[50px] items-center max-[900px]:grid-cols-1">
        <div className="w-full">
          <img
            src={specialProduct.image}
            alt="جام مخصوص گل یخ"
            onError={handleImageError}
            className="w-full rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          />
        </div>
        <div>
          <span className="inline-block bg-[#fff3cd] text-[#b7791f] px-4 py-2 rounded-[30px] font-bold mb-5">
            ⭐ پیشنهاد ویژه امروز
          </span>
          <h2 className="text-[42px] font-bold mb-5 max-[600px]:text-[30px]">
            {specialProduct.name}
          </h2>
          <p className="text-[18px] text-gray mb-[25px] leading-loose max-[900px]:text-base">
            ترکیبی از سه اسکوپ بستنی، میوه تازه، سس شکلات، سس کارامل، خامه فرم
            گرفته و بیسکویت شکلاتی.
          </p>
          <div className="text-[34px] font-extrabold text-primary mb-[25px]">
            {specialProduct.price}
          </div>
          <button
            className="px-[35px] py-[15px] bg-primary text-white rounded-[35px] text-[17px] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover"
            onClick={() => onOrderSpecial(specialProduct)}
          >
            🛒 سفارش ویژه
          </button>
        </div>
      </div>
    </section>
  );
}
