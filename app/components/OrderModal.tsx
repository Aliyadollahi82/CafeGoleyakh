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
    <div
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/65 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-300"
      >
        <button
          onClick={onClose}
          className="absolute top-3 left-5 text-3xl font-light text-gray-500 hover:text-black"
        >
          ×
        </button>

        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          className="mb-5 h-[240px] w-full rounded-xl object-cover"
        />

        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="mt-2 text-gray-500">{product.description}</p>
        <div className="my-4 text-2xl font-bold text-[#4fc3f7]">
          {product.price}
        </div>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <input
            type="text"
            placeholder="نام شما"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="rounded-xl border border-blue-100 p-3.5 outline-none focus:border-[#4fc3f7]"
          />
          <input
            type="tel"
            placeholder="شماره تماس"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="rounded-xl border border-blue-100 p-3.5 outline-none focus:border-[#4fc3f7]"
          />
          <select
            required
            value={formData.table}
            onChange={(e) =>
              setFormData({ ...formData, table: e.target.value })
            }
            className="rounded-xl border border-blue-100 p-3.5 outline-none focus:border-[#4fc3f7]"
          >
            <option value="">شماره میز را انتخاب کنید</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <textarea
            placeholder="توضیحات سفارش (اختیاری)"
            rows={3}
            value={formData.note}
            onChange={(e) =>
              setFormData({ ...formData, note: e.target.value })
            }
            className="rounded-xl border border-blue-100 p-3.5 outline-none focus:border-[#4fc3f7]"
          />
          <button
            type="submit"
            className="rounded-xl bg-[#4fc3f7] p-3.5 text-lg text-white transition-all hover:bg-[#29b6f6]"
          >
            ثبت سفارش
          </button>
        </form>
      </div>
    </div>
  );
}