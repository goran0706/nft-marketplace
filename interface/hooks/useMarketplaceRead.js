import { marketplaceABI, marketplaceAddress } from "@/constants";
import { useContractRead } from "wagmi";

export default function useMarketplaceRead(getter) {
  const { data, error, isLoading, isError, isSuccess } = useContractRead({
    address: marketplaceAddress,
    abi: marketplaceABI,
    functionName: getter,
  });

  return { data, error, isLoading, isError, isSuccess };
}
