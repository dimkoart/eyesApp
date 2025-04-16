import { useQuery } from "@tanstack/react-query";
import { getCryptoMarketChart } from "./lib";
import { CoinDetails, CoinsList, MarketChartData } from "@/types/coinListTypes";

export const getCryptoCoinMarketChart = ({
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
  } = useQuery<MarketChartData>({
    queryKey: ["cryptoMarketChart", id],
    queryFn: async () => getCryptoMarketChart(id),
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

export default getCryptoCoinMarketChart;
