import { Grid } from "../styled";
import ArticleCard from "../Card/ArticleCard";
import CollectionCard from "../Card/CollectionCard";
import CreatorCard from "../Card/CreatorCard";
import GuideCard from "../Card/GuideCard";
import NFTCard from "../Card/NFTCard";

export const ArticleList = ({ items = [] }) => {
  return (
    <Grid columns={4}>
      {items.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </Grid>
  );
};

export const CollectionList = ({ items = [] }) => {
  return (
    <Grid columns="4">
      {items.map((collection) => (
        <CollectionCard collection={collection} key={collection.id} />
      ))}
    </Grid>
  );
};

export const CreatorList = ({ items = [] }) => {
  return (
    <Grid columns="5">
      {items.map((creator) => (
        <CreatorCard creator={creator} key={creator.id} />
      ))}
    </Grid>
  );
};

export const GuideList = ({ items = [] }) => {
  return (
    <Grid columns="4">
      {items.map((guide) => (
        <GuideCard key={guide.step} guide={guide} />
      ))}
    </Grid>
  );
};

export const NFTList = ({ items = [] }) => {
  return (
    <Grid columns="5">
      {items.map((nft) => (
        <NFTCard nft={nft} key={nft.id} />
      ))}
    </Grid>
  );
};
