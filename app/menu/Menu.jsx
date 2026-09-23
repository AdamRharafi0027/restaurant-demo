"use client";

import { useMemo, useState } from "react";
import ProductsData from "@/Data/ProductsData/ProductsData";
import DisplayProduct from "@/sections/MenuSections/DisplayProduct";
import MenuHeader from "@/sections/MenuSections/MenuHeader";
import SearchFilter from "@/sections/MenuSections/SearchFilter";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("burgers");
  const [search, setSearch] = useState("");

  const displayProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return ProductsData.filter((product) => {
      const matchesCategory = product.category === activeCategory;
      const matchesSearch =
        !normalizedSearch ||
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <section className="mt-20">
        <MenuHeader />
        <SearchFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          search={search}
          setSearch={setSearch}
        />
        <DisplayProduct
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          search={search}
          products={displayProducts}
        />
      </section>
    </>
  );
};

export default Menu;
