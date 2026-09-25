"use client";
import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";
import MainButton from "../MainButton";
import { usePathname } from 'next/navigation';
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const cartCount = useSelector((state) =>
    state.ProductCart.ProductCart.reduce(
      (total, item) => total + (item.quantity ?? 1),
      0,
    ),
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (event, link) => {
    setIsOpen(false);

    if (link.href.startsWith("#")) {
      event.preventDefault();
      scrollToSection(link.href.substring(1));
    }
  };
  return (
    <>
      <header className="flex px-4 py-4 justify-between items-center fixed border-b border-gray-300 z-50 w-full bg-white lg:px-50">
        {/* LOGO */}
        <Link href={"/"} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center">
            <span className="text-white font-display font-black text-xl leading-none">
              BH
            </span>
          </div>
          <span className="font-display font-extrabold text-brand-black text-xl tracking-tight group-hover:text-orange-500 transition-colors">
            BITE HOUSE
          </span>
        </Link>
        {
          // Mobile Menu
          isOpen && (
            <nav className="fixed bg-white inset-0 top-15 w-full h-115 flex flex-col gap-3 px-3 py-5">
          {NavLinks.map((link, index) => {
            return (
              <ul key={index} className=" p-3 rounded-sm hover:bg-gray-50 transition-all hover:text-orange-500">
                <Link href={link.href} onClick={(event) => handleNavClick(event, link)}>
                  {link.linkName}
                </Link>
              </ul>
            );
          })}
          <MainButton className={"bg-orange-500 text-white lg:absolute"}>
            Order Now
          </MainButton>
        </nav>
          )
        }
        {/* Desktop Menu */}
        <nav className="hidden fixed bg-white inset-0 top-15 w-full h-115 lg:flex flex-col gap-3 px-3 py-5 lg:sticky lg:flex-row lg:h-auto lg:w-auto lg:p-0">
          {NavLinks.map((link, index) => {
            return (
              <ul key={index} className="text-gray-600 p-3 rounded-sm hover:bg-gray-50 transition-all hover:text-orange-500">
                <Link 
                href={link.href} 
                onClick={(event) => handleNavClick(event, link)}
                className={`${link.href === pathname && "text-orange-500"}`}
                >
                  {link.linkName}
                </Link>
              </ul>
            );
          })}
          <MainButton className={"bg-orange-500 text-white lg:hidden hover:bg-orange-600"}>
            Order Now
          </MainButton>
        </nav>
        <div className="flex items-center gap-3">
          <Link
          href={"/cart"}
          className="relative p-2 hover:bg-warm-bg rounded-lg transition-colors"
          aria-label={
            cartCount > 0
              ? `Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`
              : "Cart"
          }
        >
          <ShoppingCart />
          {cartCount > 0 && (
            <span
              aria-hidden="true"
              className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-orange-500 px-1 text-[10px] font-bold leading-none text-white"
            >
              {cartCount}
            </span>
          )}
        </Link>
        <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
       <Link href={"/menu"}>
        <MainButton className={"bg-orange-500 text-white hidden lg:block px-3 py-2! hover:bg-orange-600"}>
            Order Now
          </MainButton>
       </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
