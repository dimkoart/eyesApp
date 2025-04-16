import { colors } from "@/constants/Colors";

export const getUpOrDownCoinPrice = ({
  price_change_24h,
  currentPrice,
}: {
  price_change_24h?: number;
  currentPrice?: number;
}) => {
  if (currentPrice && price_change_24h) {
    if (Math.sign(price_change_24h) !== -1)
      return { color: colors.friend, icon: "arrow.up.right" };
    else return { color: colors.negative, icon: "arrow.down.forward" };
  } else
    return {
      color: colors.group,
      icon: "arrow.forward",
    };
};
