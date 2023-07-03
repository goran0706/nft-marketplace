import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import Footer from "../components/Footer";
import Header from "../components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "NFT Marketplace",
  description:
    "Marketplace for digital arts and NFT collection. Discover, buy and sell NFTs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
