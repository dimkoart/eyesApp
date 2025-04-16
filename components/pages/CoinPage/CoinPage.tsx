import getCryptoCoinById from "@/api/coinmarketcapApi/getCryptoCoinById";
import getCryptoCoinMarketChart from "@/api/coinmarketcapApi/getCryptoCoinMarketChart";
import { getCryptoById } from "@/api/coinmarketcapApi/lib";
import SkeletonGraph from "@/components/Skeletons/CoinPage/SkeletonGraph";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { colors } from "@/constants/Colors";
import { formatChartData } from "@/functions/formatChartData";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function CoinPage() {
  const { coinId } = useLocalSearchParams<{ coinId?: string }>();
  //   const { data, isFetching } = getCryptoCoinById({ id: coinId });
  const { data, isFetching, refetch, error } = getCryptoCoinMarketChart({
    id: coinId,
  });

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ alignItems: "center", marginTop: 16 }}>
      {isFetching ? (
        <SkeletonGraph />
      ) : (
        <LineChart
          data={formatChartData(data?.prices)}
          width={screenWidth - 16}
          height={220}
          yAxisLabel="$"
          style={{ borderRadius: 8 }}
          chartConfig={{
            decimalPlaces: 0,
            backgroundGradientFrom: "#08130D",
            backgroundGradientTo: "#081a14",
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2,
          }}
          bezier
        />
      )}
    </View>
  );
}
