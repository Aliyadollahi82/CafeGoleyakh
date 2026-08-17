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
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
        />
        <div className="product-badge">{product.badge}</div>
        <button
          className={`favorite-btn ${isFav ? "active" : ""}`}
          data-id={product.id}
          onClick={() => setIsFav(!isFav)}
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <button
            className="order-btn"
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