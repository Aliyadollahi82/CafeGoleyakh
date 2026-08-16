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

  return (
    <div className="bg-white pt-10 pb-5">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="جستجوی محصول..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border-2 border-blue-100 bg-white px-6 py-4 text-base outline-none transition-all focus:border-[#4fc3f7] focus:ring-4 focus:ring-[#4fc3f7]/20"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearchTerm("");
              }}
              className={`rounded-full px-6 py-3 font-semibold transition-all hover:-translate-y-1 ${
                activeCategory === cat.id
                  ? "bg-[#4fc3f7] text-white"
                  : "bg-[#eef8ff] text-slate-800 hover:bg-[#4fc3f7] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}