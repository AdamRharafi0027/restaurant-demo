import Image from "next/image";
import MainButton from "../MainButton";
import { PlusIcon } from "lucide-react";

const MenuCard = ({ image, title, description, price, product }) => {
  const ProductTags = {
    POPULAR: "bg-orange-500 text-white",
    NEW: "bg-black text-white",
    HOT: "bg-red-500 text-white",
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 group hover:shadow-md transition-shadow duration-200">
      <div className="relative bg-gray-100 overflow-hidden cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full! h-full! object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.tag && (
          <span
            className={`absolute top-2 left-2 text-[10px] font-display font-bold px-2 py-0.5 rounded ${ProductTags[product.tag]}`}
          >
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display font-bold text-brand-black text-base leading-snug cursor-pointer hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-xs mt-1 line-clamp-2 leading-relaxed font-body">
          {description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="font-display font-extrabold text-orange-500 text-lg">
            {price} MAD
          </span>

          <MainButton className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-display font-bold px-3 py-1.5 rounded transition-colors">
            <PlusIcon />
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
