import { colors } from "@/constants/Colors";
import { Coin } from "@/types/coinListTypes";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";
import { getUpOrDownCoinPrice } from "@/functions/getUpOrDownCoinPrice";
import { Link } from "expo-router";

export default function CoinItem({ data }: { data?: { item?: Coin } }) {
  const coinData = data?.item;

  const priceData = getUpOrDownCoinPrice({
    currentPrice: coinData?.current_price,
    price_change_24h: coinData?.price_change_24h,
  });

  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
      <Link
        href={{
          pathname: "/(tabs)/coins/[coinId]",
          params: {
            coinId: coinData?.id,
            imageUrl: coinData?.image,
            coinName: coinData?.name,
          },
        }}
        style={styles.linkStyles}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Image source={{ uri: coinData?.image }} style={styles.image} />
            <View style={{ flexShrink: 1 }}>
              <Text style={styles.text} numberOfLines={2} adjustsFontSizeToFit>
                {coinData?.name}
              </Text>
            </View>
          </View>
          <View style={styles.rightBlockContainer}>
            <View
              style={{
                ...styles.priceContainer,
                flexDirection: "column",
              }}
            >
              <IconSymbol
                size={25}
                name={priceData?.icon}
                color={priceData?.color}
              />
              <Text style={{ ...styles.text, fontSize: 10 }} numberOfLines={1}>
                {coinData?.price_change_24h.toFixed(5)} $
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={{ ...styles.text }} numberOfLines={1}>
                {coinData?.current_price} $
              </Text>
            </View>
          </View>
        </View>
      </Link>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingInline: 8,
    justifyContent: "space-between",
    height: 48,
    backgroundColor: colors.basePrimary,
    borderColor: colors.baseSecondary,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    width: "100%",
  },
  image: { height: 40, width: 40 },
  text: { color: colors.contentPrimary, fontSize: 20 },
  contentContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    width: 190,
  },
  priceContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  rightBlockContainer: { alignItems: "center", flexDirection: "row", gap: 4 },
  linkStyles: { width: "100%", marginBottom: 4 },
});
