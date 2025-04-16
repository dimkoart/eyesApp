import { useQuery } from "@tanstack/react-query";
import { getCryptoById } from "./lib";
import { CoinDetails } from "@/types/coinListTypes";

export const getCryptoCoinById = ({
  id,
  enabled = true,
}: {
  id: string;
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
  } = useQuery<CoinDetails>({
    queryKey: ["cryptoId", id],
    queryFn: async () => getCryptoById(id),
    enabled: !!id && enabled,
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

export default getCryptoCoinById;
