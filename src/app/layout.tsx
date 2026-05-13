import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { cookies } from "next/headers";
import { getCart } from "@/lib/shopify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petrolified - Automotive Art",
  description: "Automotive portraits, captured in clean illustrations.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read cart ID from cookies and securely check total count
  const cookieStore = await cookies();
  const cartId = cookieStore.get("shopify_cart_id")?.value;
  let cartCount = 0;

  if (cartId) {
    const cart = await getCart(cartId);
    cartCount = cart?.totalQuantity || 0;
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-white text-[#111111]">
        <Header cartCount={cartCount} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
