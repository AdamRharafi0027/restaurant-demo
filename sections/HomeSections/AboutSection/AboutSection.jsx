import { RESTAURANT_IMAGE_1 } from "@/Data/ProductsData/ProductsData"

const AboutSection = () => {
  return (
    <>
        <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-display font-bold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="font-display font-extrabold text-brand-black text-3xl sm:text-4xl mt-2 mb-5 leading-tight">
                Real Food,<br />No Shortcuts.
              </h2>
              <p className="text-gray-600 font-body leading-relaxed mb-4">
                Bite House started with a simple idea: fast food doesn't have to mean low quality. We source fresh ingredients daily, grind our beef in-house, and prepare every order with care — whether you're eating in or picking up.
              </p>
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                We're your neighborhood spot for honest food done right. Come hungry, leave happy.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🌿', title: 'Fresh Daily', desc: 'Ingredients sourced every morning' },
                  { icon: '⚡', title: 'Ready in 10 min', desc: 'Hot, fast, and never pre-made' },
                  { icon: '🍔', title: 'Quality Beef', desc: 'In-house ground, never frozen' },
                  { icon: '❤️', title: 'Made with Care', desc: 'Every order, every time' },
                ].map(f => (
                  <div key={f.title} className="flex gap-3">
                    <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                      {f.icon}
                    </div>
                    <div>
                      <div className="font-display font-bold text-brand-black text-sm">{f.title}</div>
                      <div className="text-gray-500 font-body text-xs mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={RESTAURANT_IMAGE_1}
                alt="Bite House restaurant interior"
                className="w-full rounded-xl object-cover h-72 sm:h-96"
              />
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white rounded-xl p-4 shadow-lg">
                <div className="font-display font-black text-2xl leading-none">Since</div>
                <div className="font-display font-black text-2xl leading-none">2021</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection