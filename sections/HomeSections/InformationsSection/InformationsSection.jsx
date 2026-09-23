import MainButton from "@/components/MainButton"

const InformationsSection = () => {
  return (
    <>
     <section  id="locations" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-orange-500 font-display font-bold text-sm uppercase tracking-widest">Find Us</span>
            <h2 className="font-display font-extrabold text-brand-black text-3xl sm:text-4xl mt-1">Location & Hours</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div>
              <div className="bg-white rounded-xl border border-gray-100 p-6 mb-5">
                <div className="flex items-start gap-4 pb-5 border-b border-gray-100 mb-5">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">📍</div>
                  <div>
                    <div className="font-display font-bold text-brand-black">Address</div>
                    <div className="text-gray-600 font-body text-sm mt-1">
                      123 Rue Mohammed V, Maarif<br />
                      Casablanca 20100, Morocco
                    </div>
                    <span className="text-xs text-gray-400 mt-1 block">(Demo location — fictional content)</span>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 text-sm font-display font-bold mt-2 transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-5 border-b border-gray-100 mb-5">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                  <div>
                    <div className="font-display font-bold text-brand-black">Opening Hours</div>
                    <div className="text-gray-600 font-body text-sm mt-1 space-y-0.5">
                      <div className="flex justify-between gap-8">
                        <span>Monday – Friday</span>
                        <span className="font-medium text-brand-black">11:00 – 23:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Saturday – Sunday</span>
                        <span className="font-medium text-brand-black">10:00 – 24:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">📞</div>
                  <div>
                    <div className="font-display font-bold text-brand-black">Contact</div>
                    <a href="tel:+212600000000" className="text-gray-600 font-body text-sm hover:text-orange-500 transition-colors block mt-1">
                      +212 600 000 000
                    </a>
                    <a
                      href="https://wa.me/212600000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white font-display font-bold text-xs px-3 py-1.5 rounded-lg mt-2 transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-2">🗺️</div>
                  <p className="text-gray-400 font-body text-sm">Map — Demo Location</p>
                  <p className="text-gray-400 font-body text-xs">Casablanca, Morocco</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-display font-bold text-brand-black text-xl mb-5">Send a Message</h3>
                <form
                  className="space-y-4"
                >
                  <div>
                    <label className="block font-display font-semibold text-brand-black text-xs uppercase tracking-wide mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-100 rounded-lg px-3.5 py-2.5 font-body text-sm text-brand-black placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-semibold text-brand-black text-xs uppercase tracking-wide mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-100 rounded-lg px-3.5 py-2.5 font-body text-sm text-brand-black placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-semibold text-brand-black text-xs uppercase tracking-wide mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full border border-gray-100 rounded-lg px-3.5 py-2.5 font-body text-sm text-brand-black placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <MainButton
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-display font-bold py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </MainButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InformationsSection