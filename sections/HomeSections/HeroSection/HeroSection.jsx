import MainButton from "@/components/MainButton";
import { Star } from "lucide-react";
import Image from "next/image";
import heroImage from "../../../public/hero/hero.avif";

const HeroSection = () => {
  return (
    <>
      <section className="bg-gray-50  w-full flex items-center px-8 flex-col-reverse lg:flex-row gap-15 pb-10 mb-10 justify-between mt-15">
        {/* Texts Side */}
        <aside className="lg:pt-20">
          <div className="flex items-center gap-2 bg-orange-100 rounded-2xl w-60 px-3 py-1 text-orange-500 uppercase font-bold  text-[15px]">
            <span className="rounded-full bg-orange-500 w-1.5 h-1.5" />
            <h3>Now Open · Casablanca</h3>
          </div>
          {/* Hero Main Texts */}
          <div>
            <h1 className="text-5xl lg:text-7xl font-extrabold my-5">
              Big Flavor. <br />
              <span className="text-orange-500">Made Fresh.</span>
            </h1>
            <p className="text-gray-600 lg:text-[20px] lg:w-120">
              Premium smash burgers, crispy chicken, and loaded sides — made to
              order with the freshest ingredients, delivered to your door or
              ready for pickup.
            </p>
            {/* Hero CTA Buttons */}
            <div className="flex items-center gap-3 my-10">
              <MainButton
                className={
                  "bg-orange-500 text-white py-2 px-5 hover:bg-orange-600 transition-all"
                }
              >
                Order Now
              </MainButton>
              <MainButton
                className={
                  "border border-gray-300 py-2 px-5 hover:bg-gray-50 transition-all"
                }
              >
                View Menu
              </MainButton>
            </div>
          </div>
          <div className="flex flex-wrap  gap-5">
            {[
              {
                title: "Fresh Ingredients",
                icon: "🌿",
              },
              {
                title: "Fast Preparation",
                icon: "⚡",
              },
              {
                title: "Pickup & Delivery",
                icon: "🛵",
              },
            ].map((item, index) => {
              return (
                <div key={index} className="flex gap-2">
                  {item.icon}
                  <h1 className="text-gray-600">{item.title}</h1>
                </div>
              );
            })}
          </div>
        </aside>
        {/* Image Side */}
        <aside className="relative lg:w-full lg:h-screen">
          <Image src={heroImage} width={1200} height={900} alt="hero Image" />
          <div className="absolute bottom-6 left-6 lg:bottom-45 lg:left-10 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg ring-1 ring-black/5">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold leading-none text-gray-900">
                4.9
              </span>

              <Star
                size={18}
                fill="currentColor"
                className="text-yellow-400"
                strokeWidth={1.5}
              />
            </div>

            <p className="mt-1 text-[11px] font-medium text-gray-500">
              2,400+ orders
            </p>
          </div>
        </aside>
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
