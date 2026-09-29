"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import {
  removeFromCart,
  updateCartQuantity,
} from "@/ProductSlice/ProductSlice";

const formatPrice = (price) => `${price} MAD`;

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.ProductCart.ProductCart);
  const itemCount = items.reduce((total, item) => total + (item.quantity ?? 1), 0);
  const subtotal = items.reduce(
    (total, item) => total + item.price * (item.quantity ?? 1),
    0,
  );
  const orderDetails = items
    .map((item) => `${item.quantity ?? 1} x ${item.title}`)
    .join("\n");
  // const whatsappUrl = `https://wa.me/212774976532?text=${encodeURIComponent(
  //   `Hello Bite House, I'd like to order:\n${orderDetails}\n\nItems total: ${formatPrice(subtotal)}`,
  // )}`;
  const whatsappUrl = `https://wa.me/212774976532?text=${encodeURIComponent(
  `🍔 *New Order – Bite House*

Hello Bite House! 👋

I'd like to place the following order:

${orderDetails}

💰 *Items total:* ${formatPrice(subtotal)}

Please confirm my order and let me know the estimated preparation time.

Thank you! 🙏`
)}`;


  if (items.length === 0) {
    return (
      <main className="min-h-[60vh] bg-gray-50 px-4 pb-20 pt-32 sm:px-6">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <ShoppingBag size={34} aria-hidden="true" />
          </div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            Bite House
          </p>
          <h1 className="text-3xl font-black text-gray-950 sm:text-4xl">
            Your cart is empty
          </h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
            Find something fresh from the menu and it will be waiting here.
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600"
          >
            Browse the menu
            <ArrowLeft className="rotate-180" size={16} aria-hidden="true" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[60vh] bg-gray-50 px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-gray-200 pb-5">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Bite House
            </p>
            <h1 className="text-3xl font-black text-gray-950 sm:text-4xl">
              Your cart
            </h1>
          </div>
          <p className="text-sm font-medium text-gray-500">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <section aria-label="Cart items" className="divide-y divide-gray-200">
            {items.map((item) => {
              const quantity = item.quantity ?? 1;

              return (
                <article
                  key={item.id}
                  className="flex gap-4 py-5 first:pt-0 sm:gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 shrink-0 rounded-md bg-gray-200 object-cover sm:h-28 sm:w-28"
                  />
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="min-w-0">
                      <h2 className="font-bold leading-snug text-gray-950">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        {formatPrice(item.price)} each
                      </p>
                      <button
                        type="button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 transition-colors hover:text-red-600"
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        <Trash2 size={14} aria-hidden="true" />
                        Remove
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                      <div className="inline-flex h-9 items-center rounded-md border border-gray-300 bg-white">
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              updateCartQuantity({
                                id: item.id,
                                quantity: quantity - 1,
                              }),
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center text-gray-600 transition-colors hover:bg-gray-100"
                          aria-label={`Decrease ${item.title} quantity`}
                        >
                          <Minus size={14} aria-hidden="true" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-gray-950">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              updateCartQuantity({
                                id: item.id,
                                quantity: quantity + 1,
                              }),
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center text-gray-600 transition-colors hover:bg-gray-100"
                          aria-label={`Increase ${item.title} quantity`}
                        >
                          <Plus size={14} aria-hidden="true" />
                        </button>
                      </div>
                      <span className="min-w-20 text-right font-extrabold text-gray-950">
                        {formatPrice(item.price * quantity)}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 pt-5 text-sm font-bold text-orange-600 transition-colors hover:text-orange-700"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Add more from the menu
            </Link>
          </section>

          <aside className="border-t border-gray-200 pt-5 lg:sticky lg:top-28 lg:border-t-0 lg:pt-0">
            <div className="border-y border-gray-200 py-5">
              <h2 className="text-lg font-extrabold text-gray-950">
                Order summary
              </h2>
              <div className="mt-5 flex justify-between text-sm">
                <span className="text-gray-600">Items ({itemCount})</span>
                <span className="font-semibold text-gray-950">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-3 text-xs leading-5 text-gray-500">
                Delivery and pickup details can be confirmed with the restaurant
                when you place your order.
              </p>
              <div className="mt-5 flex justify-between border-t border-gray-200 pt-4">
                <span className="font-bold text-gray-950">Items total</span>
                <span className="text-lg font-black text-orange-600">
                  {formatPrice(subtotal)}
                </span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-md bg-green-600 px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-700"
            >
              Order on WhatsApp
            </a>
            <Link
              href="/menu"
              className="mt-3 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-bold text-gray-800 transition-colors hover:bg-gray-100"
            >
              Continue shopping
            </Link>
            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
              Your message will include these items and their total.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;