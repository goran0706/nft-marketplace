"use client";
import { Container, Page, PageTitle } from "@/components/styled";
import Uploader from "@/components/Uploader";

const Create = () => {
  return (
    <Page>
      <Container>
        <PageTitle>Create NFT Metadata</PageTitle>
        <Uploader />
      </Container>
    </Page>
  );
};

export default Create;
