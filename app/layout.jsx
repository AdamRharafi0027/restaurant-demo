import { Outfit } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from '@/components/Footer/Footer';
import StoreProvider from "@/components/StoreProvider";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'], 
  display: 'swap',
});

export const metadata = {
  title: "Restaurant WebSite | Demo",
  description: "Restaurant website Demo",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
        </body>
    </html>
  );
}

