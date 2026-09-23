import AboutSection from "@/sections/HomeSections/AboutSection/AboutSection";
import BannerSection from "@/sections/HomeSections/BannerSection/BannerSection";
import HeroSection from "@/sections/HomeSections/HeroSection/HeroSection";
import InformationsSection from "@/sections/HomeSections/InformationsSection/InformationsSection";
import MenuSection from "@/sections/HomeSections/MenuSection/MenuSection";
import OffersSection from "@/sections/HomeSections/OffersSection/OffersSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <MenuSection />
            <OffersSection />
            <AboutSection />   
            <InformationsSection />
            <BannerSection />
        </>
    );
}
export default Home;