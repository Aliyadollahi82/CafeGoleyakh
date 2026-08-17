"use client";

import { useState, FormEvent, SyntheticEvent } from "react";
import { Product } from "../types/product";

interface OrderModalProps {
  product: Product | null;
  onClose: () => void;
}

interface FormDataState {
  name: string;
  phone: string;
  table: string;
  note: string;
}

export default function OrderModal({ product, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    phone: "",
    table: "",
    note: "",
  });

  if (!product) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.table) {
      alert("لطفاً شماره میز را انتخاب کنید.");
      return;
    }

    alert(
      `✅ سفارش شما با موفقیت ثبت شد.\n\n🍦 محصول:\n${product.name}\n\n👤 نام:\n${formData.name}\n\n📞 تلفن:\n${formData.phone}\n\n🪑 شماره میز:\n${formData.table}\n\n📝 توضیحات:\n${formData.note || "ندارد"}\n\nاز انتخاب کافه بستنی گل یخ سپاسگزاریم ❤️`
    );

    onClose();
  };

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/no-image.png";
  };

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-modal" onClick={onClose}>
          ×
        </span>
        <img src={product.image} alt={product.name} onError={handleImageError} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="modal-price">{product.price}</div>
        <form id="orderForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="customerName"
            placeholder="نام شما"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="tel"
            id="customerPhone"
            placeholder="شماره تماس"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <select
            id="tableNumber"
            required
            value={formData.table}
            onChange={(e) =>
              setFormData({ ...formData, table: e.target.value })
            }
          >
            <option value="">شماره میز را انتخاب کنید</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <textarea
            id="customerNote"
            placeholder="توضیحات سفارش (اختیاری)"
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          />
          <button type="submit" className="submit-order">
            ثبت سفارش
          </button>
        </form>
      </div>
    </div>
  );
}