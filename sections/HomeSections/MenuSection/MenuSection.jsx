"use client"
import MainButton from "@/components/MainButton";
import MenuCard from "@/components/MenuComp/MenuCard";
import categories from "@/components/MenuComp/MenuCategorys";
import ProductsData from "@/Data/ProductsData/ProductsData";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MenuSection = () => {
   
  const [activeCategory, setActiveCategory] = useState("burgers");
  const previewProducts = ProductsData.filter(product=> product.category === activeCategory)
  return (
    <>
      <section id="menu" className="scroll-mt-20 bg-white px-3 text-center lg:px-50 lg:mt-30">
        {/* header */}
        <div className="flex flex-col lg:flex-row lg:justify-between text-left">
          <div>
            <h1 className="text-4xl font-bold">Our Menu</h1>
          <h3 className="my-2 text-gray-600">Everything made to order, every time.</h3>
          </div>
        <Link href={"/menu"} className="flex text-orange-500 font-bold items-center gap-2 cursor-pointer">
          Full Menu <MoveRight />
        </Link>
        </div>
        {/* categories */}
        <div className="flex flex-wrap gap-5 my-10 ">
          {categories.map((category, index) => {
            return (
              <MainButton
                className={
                  `rounded-full! px-2 lg:px-8 border  transition-all
                  ${activeCategory === category.id
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-orange-300 hover:text-orange-500'
                }
                  `
                }
                onclick={()=>setActiveCategory(category.id)}
                key={index}
              >
                <span>{category.icon}</span>
                {category.label}
              </MainButton>
            );
          })}
        </div>
        {/* menu cards */}
        {/* <div className="flex flex-wrap gap-3"> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewProducts.map((product) => (
            <MenuCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              product={product}
            />
          ))}
        </div>
        <MainButton className={" mt-8 border border-gray-300 hover:hover:bg-gray-50 px-10 "}>
          See Full Menu
        </MainButton>
      </section>
    </>
  );
};

export default MenuSection;
