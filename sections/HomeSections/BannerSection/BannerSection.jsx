import MainButton from "@/components/MainButton"

const BannerSection = () => {
  return (
    <>
         <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-black text-white text-3xl sm:text-4xl mb-3">
            Hungry right now?
          </h2>
          <p className="text-gray-400 font-body mb-7 text-base">
            Order in minutes. Ready in 10. Delivered to your door.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <MainButton
              className="bg-orange-500 hover:bg-orange-600 text-white font-display font-bold px-7 py-3.5 rounded-lg transition-colors"
            >
              Order Now
            </MainButton>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-display font-bold px-7 py-3.5 rounded-lg transition-colors"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default BannerSection