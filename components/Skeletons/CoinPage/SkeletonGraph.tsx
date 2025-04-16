import { colors } from "@/constants/Colors";
import ContentLoader, { Rect } from "react-content-loader/native";
import { Dimensions } from "react-native";

const SkeletonGraph = () => (
  <ContentLoader
    speed={3}
    width={Dimensions.get("window").width - 16}
    height={220}
    backgroundColor={colors.basePrimary}
    foregroundColor={colors.baseSecondary}
  >
    <Rect rx="8" ry="8" width="100%" height="220" />
  </ContentLoader>
);

export default SkeletonGraph;
