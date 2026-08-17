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

  const inputClasses =
    "p-3.5 border border-[#dbeafe] rounded-xl font-[inherit] text-[15px] outline-none focus:border-primary";

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.65)] flex justify-center items-center z-[99999] p-5 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[520px] max-h-[90vh] overflow-y-auto rounded-[20px] p-[30px] relative animate-[popup_0.35s]"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute top-[15px] left-5 text-[32px] cursor-pointer"
          onClick={onClose}
        >
          ×
        </span>
        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-[240px] object-cover rounded-[15px] mb-5"
        />
        <h2 className="mb-2.5">{product.name}</h2>
        <p>{product.description}</p>
        <div className="text-[26px] font-bold text-primary my-3.5">
          {product.price}
        </div>
        <form
          id="orderForm"
          className="flex flex-col gap-[15px] mt-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="customerName"
            placeholder="نام شما"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
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
            className={inputClasses}
          />
          <select
            id="tableNumber"
            required
            value={formData.table}
            onChange={(e) =>
              setFormData({ ...formData, table: e.target.value })
            }
            className={inputClasses}
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
            className={`${inputClasses} resize-y min-h-[100px]`}
          />
          <button
            type="submit"
            className="p-3.5 bg-primary text-white rounded-xl text-[17px] transition-all duration-300 hover:bg-primary-hover"
          >
            ثبت سفارش
          </button>
        </form>
      </div>
    </div>
  );
}
