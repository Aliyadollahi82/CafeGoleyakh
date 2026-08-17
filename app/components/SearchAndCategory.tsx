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
    <>
      <section className="search-section">
        <div className="container">
          <input
            type="text"
            id="searchInput"
            placeholder="جستجوی محصول..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="category-section">
        <div className="container">
          <div className="categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-category={cat.id}
                className={`category ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchTerm("");
                }}
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