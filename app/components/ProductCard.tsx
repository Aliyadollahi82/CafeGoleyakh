"use client";

import { useState, SyntheticEvent } from "react";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

export default function ProductCard({ product, onOrder }: ProductCardProps) {
  const [isFav, setIsFav] = useState<boolean>(false);

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/no-image.png";
  };

  return (
    <div
      /* تغییر hover:-translate-y-1 جهت جابه‌جایی ملایم‌تر به سمت بالا */
      className="bg-white rounded-[18px]  overflow-hidden shadow-[var(--color-card-shadow)] transition-all duration-[350ms] relative opacity-0 translate-y-2 card-reveal hover:-translate-y-1 hover:shadow-[var(--color-card-shadow-hover)] flex flex-col justify-between"
      data-reveal
    >
      {/* تنظیم ارتفاع مناسب عکس: در موبایل sm:h-[200px] یا h-[220px] و دسکتاپ h-[230px] */}
      <div className="relative  w-full overflow-hidden shrink-0 px-5">
        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.05]"
        />
        {product.badge && (
          <div className="absolute top-[15px] right-[15px] bg-[#ff9800] text-white px-[14px] py-1.5 rounded-[20px] text-[13px] font-bold z-10">
            {product.badge}
          </div>
        )}
        <button
          className={`absolute top-[15px] left-[15px] w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center text-[22px] shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 z-10 ${
            isFav ? "text-[#ff3b5c]" : ""
          }`}
          data-id={product.id}
          onClick={() => setIsFav(!isFav)}
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="p-[22px] flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-[22px] sm:text-[24px] mb-2.5 font-bold">{product.name}</h3>
          <p className="text-gray text-[14px] sm:text-[15px] mb-5 min-h-[50px] line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[20px] sm:text-[22px] font-extrabold text-primary">
            {product.price}
          </span>
          <button
            className="px-5 py-[11px]  bg-primary text-white rounded-[30px] transition-all duration-300 hover:bg-primary-hover hover:-translate-y-[2px]"
            data-id={product.id}
            onClick={() => onOrder(product)}
          >
            سفارش
          </button>
        </div>
      </div>
    </div>
  );
}