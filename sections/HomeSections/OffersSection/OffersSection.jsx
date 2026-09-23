import MainButton from "@/components/MainButton"
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
      {OffersData.map(offer=>(
        <div
                key={offer.id}
                className="relative overflow-hidden rounded-xl bg-white border border-gray-200 group"
              >
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className={`absolute top-3 right-3 text-xs font-display font-bold px-3 py-1 rounded ${
                    offer.color === 'red' ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'
                  }`}>
                    {offer.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-extrabold text-black text-xl mb-1">{offer.name}</h3>
                  <p className="text-gray-500 font-body text-sm mb-4">{offer.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-black text-orange-500 text-2xl">{offer.offerPrice} MAD</span>
                      <span className="text-gray-400 font-body text-sm line-through">{offer.originalPrice} MAD</span>
                    </div>
                    <MainButton
                      className={`font-display font-bold text-sm px-4 py-2 rounded-lg transition-colors ${
                        offer.color === 'red'
                          ? 'bg-red-500 hover:bg-red-700 text-white'
                          : 'bg-orange-500 hover:bg-orange-600 text-white'
                      }`}
                    >
                      Order Now
                    </MainButton>
                  </div>
                </div>
              </div>
      ))}
        </aside>
      </div>
      </section>
    </>
  )
}

export default OffersSection