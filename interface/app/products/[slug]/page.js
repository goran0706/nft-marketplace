"use client";
import { Button } from "@/components/Button";
import { colors } from "@/theme";
import { Container, Page, PageTitle, Row } from "@/components/styled";
import { TbArrowBack } from "react-icons/tb";
import { useRouter } from "next/navigation";
import Product from "@/components/Product";

const ProductDetails = () => {
  const router = useRouter();
  return (
    <Page>
      <Container>
        <Row align="baseline" justify="space-between">
          <PageTitle>Product Details</PageTitle>
          <Button
            ghost="true"
            outline="true"
            outlinecolor={colors.bg3}
            compact="true"
            label="Back"
            Icon={<TbArrowBack />}
            onClick={() => router.back()}
          />
        </Row>
        <Product productInfo={"123"} />
      </Container>
    </Page>
  );
};

export default ProductDetails;
