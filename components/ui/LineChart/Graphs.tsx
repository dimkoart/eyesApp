import getCryptoCoinMarketChart from "@/api/coinmarketcapApi/getCryptoCoinMarketChart";
import SkeletonGraph from "@/components/Skeletons/CoinPage/SkeletonGraph";
import { ThemedText } from "@/components/ThemedText";
import { colors } from "@/constants/Colors";
import { formatChartData } from "@/functions/formatChartData";
import { useState } from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

type Props = { coinId?: string };

export function Graphs({ coinId }: Props) {
  const { data, isFetching } = getCryptoCoinMarketChart({
    id: coinId,
  });
  console.log(data);
  const screenWidth = Dimensions.get("window").width;

  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    value: number;
    visible: boolean;
  }>({ x: 0, y: 0, value: 0, visible: false });

  return (
    <>
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
          onDataPointClick={({ value, x, y }) => {
            setTooltip({ x, y, value, visible: !!value });
          }}
          bezier
        />
      )}
      {tooltip.visible && (
        <View
          style={{
            position: "absolute",
            top: tooltip.y + 60,
            left: tooltip.x - 20,
            backgroundColor: "white",
            padding: 6,
            borderRadius: 4,
            zIndex: 2,
          }}
          onTouchEnd={() => {
            setTooltip({ x: 0, y: 0, value: 0, visible: false });
          }}
        >
          <ThemedText
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: colors.contentQuaternary,
            }}
          >
            ${Math.round(tooltip.value)}
          </ThemedText>
        </View>
      )}
    </>
  );
}
