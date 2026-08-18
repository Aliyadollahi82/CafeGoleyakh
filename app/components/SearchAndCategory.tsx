"use client";

interface SearchAndCategoryProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function SearchAndCategory({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
}: SearchAndCategoryProps) {
  const categories = [
    { id: "all", label: "همه" },
    { id: "icecream", label: "بستنی" },
    { id: "shake", label: "میلک شیک" },
    { id: "cake", label: "دسر" },
  ];

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    setSearchTerm("");

    // اسکرول نرم به بخش محصولات
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="py-[45px] pb-5 bg-white">
        <div className="w-[min(1200px,92%)] mx-auto">
          <input
            type="text"
            id="searchInput"
            placeholder="جستجوی محصول..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-4 px-[22px] border-2 border-[#dbeafe] rounded-[50px] text-[17px] outline-none transition-all duration-300 bg-white focus:border-primary focus:shadow-[0_0_15px_rgba(79,195,247,0.2)]"
          />
        </div>
      </section>

      <section className="py-5 pb-[50px] bg-white">
        <div className="w-[min(1200px,92%)] mx-auto">
          <div className="flex justify-center items-center flex-wrap gap-[15px]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-category={cat.id}
                className={`px-6 py-3 rounded-[40px] font-semibold transition-all duration-300 hover:-translate-y-[3px] ${
                  activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-[#eef8ff] hover:bg-primary hover:text-white"
                }`}
                onClick={() => handleCategoryClick(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}