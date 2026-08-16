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

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">منوی کافه</h2>
            <p className="mt-3 text-lg text-gray-500">
              خوشمزه‌ترین انتخاب‌ها منتظر شماست
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product: Product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrder={(prod: Product) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        </div>
      </section>

      <SpecialOffer
        onOrderSpecial={(prod: Product) => setSelectedProduct(prod)}
      />
      <Footer />
      <BackToTop />

      <OrderModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}