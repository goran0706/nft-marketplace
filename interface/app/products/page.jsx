"use client";
import { Container, Page, PageTitle } from "@/components/styled";
import { NFTList } from "@/components/List";
import { nfts } from "../../fakeData/fake";

const Products = () => {
  return (
    <Page>
      <Container>
        <PageTitle>Explore Products</PageTitle>
        <NFTList items={nfts} />
      </Container>
    </Page>
  );
};

export default Products;
