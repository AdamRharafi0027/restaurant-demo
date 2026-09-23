import MenuCard from "@/components/MenuComp/MenuCard";
import categories from "@/components/MenuComp/MenuCategorys";

const DisplayProduct = ({
  activeCategory,
  search,
  products,
  setActiveCategory,
}) => {
  const currentCategory = categories.find(
    (category) => category.id === activeCategory,
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {search ? (
        <>
          <p className="font-body text-gray-500 text-sm mb-5">
            {products.length} result{products.length !== 1 ? "s" : ""} for "
            {search}"
          </p>

          {products.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-3">🍽️</div>
              <h3 className="font-display font-bold text-brand-black text-xl mb-1">
                Nothing found
              </h3>
              <p className="text-gray-500 font-body text-sm">
                Try a different search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <MenuCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  product={product}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="mb-2">
            <h2 className="font-display font-extrabold text-brand-black text-2xl">
              {currentCategory?.icon} {currentCategory?.label}
            </h2>
            <p className="text-gray-400 font-body text-xs mt-1">
              {products.length} item{products.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {products.map((product) => (
              <MenuCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                product={product}
              />
            ))}
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-display font-bold text-brand-black text-sm uppercase tracking-widest mb-5 text-gray-500">
              Browse Other Categories
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {categories
                .filter((category) => category.id !== activeCategory)
                .map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 bg-gray-50 hover:border-orange-300 hover:bg-orange-50 transition-colors text-left group"
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span className="font-display font-bold text-brand-black text-sm group-hover:text-orange-500 transition-colors">
                      {category.label}
                    </span>
                  </button>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayProduct;
