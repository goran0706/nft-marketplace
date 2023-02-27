import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
