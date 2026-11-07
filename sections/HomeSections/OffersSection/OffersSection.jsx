import OffersCard from "@/components/OffersCard/OffersCard"
import OffersData from "@/Data/OffersData"

const OffersSection = () => {
  return (
    <>
      <section id="offers" className="py-20 bg-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-red-500 font-display font-bold text-sm uppercase tracking-widest">Limited Deals</span>
            <h2 className="font-display font-extrabold text-black text-3xl sm:text-4xl mt-1">Today's Offers</h2>
          </div>
        {/* cards wrapper */}
        <aside className="grid md:grid-cols-2 gap-6">
      {OffersData.map((offer)=>(
        <OffersCard 
          key={offer.id}
          id={offer.id}
          color={offer.color}
          description={offer.description}
          image={offer.image}
          name={offer.name}
          offerPrice={offer.offerPrice}
          originalPrice={offer.originalPrice}
          tag={offer.tag}
        />
      ))}
        </aside>
      </div>
      </section>
    </>
  )
}

export default OffersSection