import useMarketplaceRead from "@/hooks/useMarketplaceRead";

export default function useListingPrice() {
  const { data } = useMarketplaceRead("getListingPrice");
  return data;
}
