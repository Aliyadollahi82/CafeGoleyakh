"use client";

import { useState } from "react";
import { productsData } from "./data/products";
import { Product } from "./types/product";
import WelcomeScreen from "./components/WelcomeScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchAndCategory from "./components/SearchAndCategory";
import ProductCard from "./components/ProductCard";
import SpecialOffer from "./components/SpecialOffer";
import OrderModal from "./components/OrderModal";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import RevealOnScroll from "./components/RevealOnScroll";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = productsData.filter((item: Product) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWelcomeEnter = () => {
    const target = document.getElementById("products");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const revealKey = filteredProducts.map((p) => p.id).join("-");

  return (
    <main>
      <WelcomeScreen onEnter={handleWelcomeEnter} />
      <Header
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <Hero />
      <SearchAndCategory
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <section className="py-[80px]" id="products">
        <div className="text-center mb-[55px]">
          <h2 className="text-[42px] font-bold mb-3 max-[600px]:text-[32px]">
            منوی کافه
          </h2>
          <p className="text-gray text-lg">خوشمزه‌ترین انتخاب‌ها منتظر شماست</p>
        </div>

        {/* تغییر کلاس‌های گرید جهت جلوگیری از کشیده شدن و محدود کردن به ۴ ستون */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] px-8">
          {filteredProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOrder={(prod: Product) => setSelectedProduct(prod)}
            />
          ))}
        </div>
      </section>

      <SpecialOffer
        onOrderSpecial={(prod: Product) => setSelectedProduct(prod)}
      />
      <Footer />
      <BackToTop />
      <RevealOnScroll key={revealKey} />

      <OrderModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
