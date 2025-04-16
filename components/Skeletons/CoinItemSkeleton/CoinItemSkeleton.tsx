import { colors } from "@/constants/Colors";
import ContentLoader, { Rect } from "react-content-loader/native";
import { Dimensions } from "react-native";

const CoinItemSkeleton = () => (
  <ContentLoader
    speed={3}
    width={Dimensions.get("window").width}
    height={48}
    backgroundColor={colors.basePrimary}
    foregroundColor={colors.baseSecondary}
  >
    <Rect rx="8" ry="8" width="100%" height="48" />
  </ContentLoader>
);

export default CoinItemSkeleton;
