import Articles from "./Articles";
import Hero from "./Hero";
import PopularItems from "./PopularItems";
import TopAccounts from "./TopAccounts";
import TopCollections from "./TopCollections";
import TrendingCollections from "./TrendingCollections";

const Marketplace = () => {
  return (
    <>
      <Hero />
      <PopularItems />
      <TrendingCollections />
      <TopCollections />
      <TopAccounts />
      <Articles />
    </>
  );
};

export default Marketplace;
