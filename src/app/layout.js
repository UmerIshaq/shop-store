import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Providers from "./Components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Store",
  description: "A Web Store Where you can purchase goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
