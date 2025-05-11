import { Coin } from "@/types/coinListTypes";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import CoinItemSkeleton from "../Skeletons/CoinItemSkeleton/CoinItemSkeleton";
import CoinItemSkeletonList from "../Skeletons/CoinItemSkeleton/CoinItemSkeletonList";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";
import { colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";
import { ReloadPage } from "../ui/Error/ReloadPage";

export default function CoinList({
  data,
  renderItem,
  isFetching,
  onRefresh,
  ListHeaderComponent,
}: {
  data?: Coin[];
  isFetching?: boolean;
  onRefresh?: () => void;
  renderItem: (data: any) => JSX.Element;
  ListHeaderComponent?: JSX.Element;
}) {
  return isFetching ? (
    <CoinItemSkeletonList />
  ) : (
    <FlatList
      data={data}
      onEndReachedThreshold={0.5}
      keyExtractor={(item) => item?.id}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
      ListEmptyComponent={<ReloadPage onPress={onRefresh} />}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={!!isFetching}
            tintColor="#F1F1F5"
          />
        ) : undefined
      }
      style={{ marginBottom: 60 }}
    />
  );
}
