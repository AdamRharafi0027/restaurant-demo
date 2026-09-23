"use client";

import MainButton from "@/components/MainButton";
import categories from "@/components/MenuComp/MenuCategorys";
import { Search } from "lucide-react";

const SearchFilter = ({
  activeCategory,
  setActiveCategory,
  search,
  setSearch,
}) => {
  return (
    <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search menu..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-100 rounded-lg font-body text-brand-black placeholder-gray-400 focus:border-orange-400 focus:outline-none"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <MainButton
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-2 lg:px-5 border lg:text-[15px] transition-all ${
                activeCategory === cat.id
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-300 hover:border-orange-300 hover:text-orange-500"
              }`}
            >
              <span>{cat.icon}</span> {cat.label}
            </MainButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
