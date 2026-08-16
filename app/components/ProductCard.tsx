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
    <div className="group relative overflow-hidden rounded-[18px] bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image Wrapper */}
      <div className="relative h-[230px] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
        />
        <div className="absolute top-4 right-4 rounded-full bg-amber-500 px-3.5 py-1 text-xs font-bold text-white">
          {product.badge}
        </div>
        <button
          onClick={() => setIsFav(!isFav)}
          className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-md transition-transform hover:scale-110"
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
        <p className="mb-5 min-h-[60px] text-sm text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-extrabold text-[#4fc3f7]">
            {product.price}
          </span>
          <button
            onClick={() => onOrder(product)}
            className="rounded-full bg-[#4fc3f7] px-5 py-2 text-white transition-all hover:-translate-y-1 hover:bg-[#29b6f6]"
          >
            سفارش
          </button>
        </div>
      </div>
    </div>
  );
}