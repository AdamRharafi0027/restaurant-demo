import Image from "next/image"
import MainButton from "../MainButton"

const OffersCard = ({id, image, name, tag, color, description, offerPrice, originalPrice}) => {
  return (
    <>
        <div
            key={id}
            className="relative overflow-hidden rounded-xl bg-white border border-gray-200 group"
        >
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
					width={200}
					height={90}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className={`absolute top-3 right-3 text-xs font-display font-bold px-3 py-1 rounded ${
                    color === 'red' ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'
                  }`}>
                    {tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-extrabold text-black text-xl mb-1">{name}</h3>
                  <p className="text-gray-500 font-body text-sm mb-4">{description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-black text-orange-500 text-2xl">{offerPrice} MAD</span>
                      <span className="text-gray-400 font-body text-sm line-through">{originalPrice} MAD</span>
                    </div>
                    <MainButton
					ariaLabel={"Order Offer"}
                      className={`font-display font-bold text-sm px-4 py-2 rounded-lg transition-colors ${
                        color === 'red'
                          ? 'bg-red-500 hover:bg-red-700 text-white'
                          : 'bg-orange-500 hover:bg-orange-600 text-white'
                      }`}
                    >
                      Order Now
                    </MainButton>
                  </div>
                </div>
              </div>
    </>
  )
}

export default OffersCard
