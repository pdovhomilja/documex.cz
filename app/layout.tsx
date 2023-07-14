import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Documex s.r.o.",
  description:
    "Děláme pro Vás dokumenty digitální, používáme nejmodernější technologie a postupy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex w-full max-w-7xl h-screen flex-col mx-auto overflow-hidden ">
        <Header />
        <div className="w-full h-full p-10 overflow-auto">
          <div className="text-xs md:text-sm">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
