import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Product Listing",
  description: "Recruitment task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
