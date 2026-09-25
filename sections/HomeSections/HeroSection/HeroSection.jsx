import MainButton from "@/components/MainButton";
import { Star } from "lucide-react";
import Image from "next/image";
import heroImage from "../../../public/hero/hero.avif";
import Link from "next/link";

const HeroSection = () => {
  return (
    // <>

    //   <section className="bg-gray-50  w-full flex items-center px-8 flex-col-reverse lg:flex-row gap-15 pb-10 mb-10 justify-between mt-15">
    //     {/* Texts Side */}
    //     <aside className="lg:pt-20">
    //       <div className="flex items-center gap-2 bg-orange-100 rounded-2xl w-60 px-3 py-1 text-orange-500 uppercase font-bold  text-[15px]">
    //         <span className="rounded-full bg-orange-500 w-1.5 h-1.5" />
    //         <h3>Now Open · Casablanca</h3>
    //       </div>
    //       {/* Hero Main Texts */}
    //       <div>
    //         <h1 className="text-5xl lg:text-7xl font-extrabold my-5">
    //           Big Flavor. <br />
    //           <span className="text-orange-500">Made Fresh.</span>
    //         </h1>
    //         <p className="text-gray-600 lg:text-[20px] lg:w-120">
    //           Premium smash burgers, crispy chicken, and loaded sides — made to
    //           order with the freshest ingredients, delivered to your door or
    //           ready for pickup.
    //         </p>
    //         {/* Hero CTA Buttons */}
    //         <div className="flex items-center gap-3 my-10">
    //           <MainButton
    //             className={
    //               "bg-orange-500 text-white py-2 px-5 hover:bg-orange-600 transition-all"
    //             }
    //           >
    //             Order Now
    //           </MainButton>
    //           <MainButton
    //             className={
    //               "border border-gray-300 py-2 px-5 hover:bg-gray-50 transition-all"
    //             }
    //           >
    //             View Menu
    //           </MainButton>
    //         </div>
    //       </div>
    //       <div className="flex flex-wrap  gap-5">
    //         {[
    //           {
    //             title: "Fresh Ingredients",
    //             icon: "🌿",
    //           },
    //           {
    //             title: "Fast Preparation",
    //             icon: "⚡",
    //           },
    //           {
    //             title: "Pickup & Delivery",
    //             icon: "🛵",
    //           },
    //         ].map((item, index) => {
    //           return (
    //             <div key={index} className="flex gap-2">
    //               {item.icon}
    //               <h1 className="text-gray-600">{item.title}</h1>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </aside>
    //     {/* Image Side */}
    //     <aside className="relative lg:w-full lg:h-screen">
    //       <Image src={heroImage} width={1200} height={900} alt="hero Image" />
    //       <div className="absolute bottom-6 left-6 lg:bottom-45 lg:left-10 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg ring-1 ring-black/5">
    //         <div className="flex items-center gap-2">
    //           <span className="text-2xl font-extrabold leading-none text-gray-900">
    //             4.9
    //           </span>

    //           <Star
    //             size={18}
    //             fill="currentColor"
    //             className="text-yellow-400"
    //             strokeWidth={1.5}
    //           />
    //         </div>

    //         <p className="mt-1 text-[11px] font-medium text-gray-500">
    //           2,400+ orders
    //         </p>
    //       </div>
    //     </aside>
    //   </section>
    // </>
    <>
    <section className="bg-warm-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-[1fr_1fr] min-h-[88vh] md:min-h-[80vh]">
          {/* Left */}
          <div className="flex flex-col justify-center py-16 md:py-20 pr-0 md:pr-10 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-display font-bold px-3 py-1.5 rounded-full mb-5 w-fit uppercase tracking-wide">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Now Open · Casablanca
            </div>

            <h1 className="font-display font-black text-brand-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-5">
              Big Flavor.<br />
              <span className="text-orange-500">Made Fresh.</span>
            </h1>

            <p className="text-gray-600 font-body text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Premium smash burgers, crispy chicken, and loaded sides — made to order with the freshest ingredients, delivered to your door or ready for pickup.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href={"/menu"}>
              <MainButton
                className="bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-base px-6 py-3.5 rounded-lg transition-colors"
              >
                Order Now
              </MainButton>
              </Link>
              <Link href={"/menu"}>
              <MainButton
                className="border border-warm-border bg-white hover:bg-warm-bg text-brand-black font-display font-bold text-base px-6 py-3.5 rounded-lg transition-colors"
              >
                View Menu
              </MainButton>
              </Link>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { icon: '🌿', text: 'Fresh Ingredients' },
                { icon: '⚡', text: 'Fast Preparation' },
                { icon: '🛵', text: 'Pickup & Delivery' },
              ].map(b => (
                <div key={b.text} className="flex items-center gap-2">
                  <span className="text-base">{b.icon}</span>
                  <span className="text-gray-600 font-body font-medium text-sm">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative order-1 md:order-2 h-64 sm:h-80 md:h-auto">
            <img
              src={`https://images.unsplash.com/photo-1678110707493-8d05425137ac?w=1200&h=900&fit=crop&auto=format&q=80`}
              alt="Bite House signature smash burger"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-warm-bg/20" />
            {/* Floating stat */}
            <div className="absolute bottom-6 left-6 bg-white rounded-lg px-4 py-3 shadow-lg">
              <div className="font-display font-black text-2xl text-brand-black leading-none">4.9 ★</div>
              <div className="text-gray-500 text-xs font-body mt-0.5">2,400+ orders</div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

/*
 Hero Image links : 
 1: https://images.unsplash.com/photo-1678110707493-8d05425137ac?w=1200&h=900&fit=crop&auto=format&q=80
 2: https://images.unsplash.com/photo-1761515397109-ba896074a139?w=900&h=700&fit=crop&auto=format&q=80
 3: https://images.unsplash.com/photo-1780805664675-d478703ae915?w=900&h=700&fit=crop&auto=format&q=80
*/
export default HeroSection;
