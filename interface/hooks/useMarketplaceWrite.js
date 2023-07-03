import { marketplaceABI, marketplaceAddress } from "@/constants";
import { useContractWrite } from "wagmi";

export default function useMarketplaceWrite(setter) {
  const { data, error, isLoading, isError, isSuccess, write } =
    useContractWrite({
      address: marketplaceAddress,
      abi: marketplaceABI,
      functionName: setter,
    });

  return { data, error, isLoading, isError, isSuccess, write };
}
