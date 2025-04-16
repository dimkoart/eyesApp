import { useQuery } from "@tanstack/react-query";
import { getCryptoList } from "./lib";
import { Coin, CoinsList } from "@/types/coinListTypes";

export const getCryptoCoinList = ({
  enabled = true,
}: {
  enabled?: boolean;
}) => {
  const {
    data,
    isError,
    isSuccess,
    error,
    refetch,
    status,
    isRefetching,
    isLoading,
    isPending,
    isFetching,
  } = useQuery<Coin[]>({
    queryKey: ["cryptoList"],
    queryFn: async () => getCryptoList(),
    enabled: enabled,
  });

  return {
    data,
    refetch,
    error,
    status,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    isPending,
    isRefetching,
  };
};

export default getCryptoCoinList;
