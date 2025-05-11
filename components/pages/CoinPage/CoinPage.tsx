import getCryptoCoinById from "@/api/coinmarketcapApi/getCryptoCoinById";
import getCryptoCoinMarketChart from "@/api/coinmarketcapApi/getCryptoCoinMarketChart";
import SkeletonGraph from "@/components/Skeletons/CoinPage/SkeletonGraph";
import { ThemedText } from "@/components/ThemedText";
import { colors } from "@/constants/Colors";
import dayjs from "dayjs";
import { formatChartData } from "@/functions/formatChartData";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import { DropDownText } from "@/components/ui/DropDownText";
import { Graphs } from "@/components/ui/LineChart/Graphs";
import { getUpOrDownCoinPrice } from "@/functions/getUpOrDownCoinPrice";
import { ReloadPage } from "@/components/ui/Error/ReloadPage";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function CoinPage() {
  const { coinId } = useLocalSearchParams<{ coinId?: string }>();

  const { data: coinData, isFetching } = getCryptoCoinById({ id: coinId });

  const currentDate = dayjs(coinData?.last_updated)
    .format("MMMM, DD YYYY")
    .toString();

  const priceData = getUpOrDownCoinPrice({
    currentPrice: coinData?.market_data?.current_price?.usd,
    price_change_24h: coinData?.market_data?.price_change_24h,
  });

  return !isFetching && !coinData?.id ? (
    <ReloadPage />
  ) : (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.pricesContainer}>
          <View style={styles.title}>
            <ThemedText style={styles.pricesText}>
              {coinData?.market_data?.current_price?.usd} $ = 1{" "}
              {coinData?.symbol}
            </ThemedText>

            <IconSymbol
              size={25}
              name={priceData?.icon}
              color={priceData?.color}
            />
          </View>
          <ThemedText style={styles.dataText}>{currentDate}</ThemedText>
        </View>

        <Graphs coinId={coinId} />

        <View style={styles.pricesContainer}>
          <DropDownText
            title="Description"
            styleTitle={styles.pricesText}
            styleText={{
              ...styles.descriptionText,
              color: colors.contentTertiary,
            }}
            text={coinData?.description["en"]}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 16,
    gap: 16,
    paddingHorizontal: 8,
    marginBottom: 60,
  },
  pricesText: {
    fontSize: 35,
  },
  dataText: { fontSize: 18, color: colors.contentTertiary },
  pricesContainer: { width: "100%", gap: 8 },
  descriptionText: { fontSize: 12 },
  title: { flexDirection: "row", alignItems: "center", gap: 8 },
});
