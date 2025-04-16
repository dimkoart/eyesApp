import { Coin } from "@/types/coinListTypes";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import CoinItemSkeleton from "../Skeletons/CoinItemSkeleton/CoinItemSkeleton";
import CoinItemSkeletonList from "../Skeletons/CoinItemSkeleton/CoinItemSkeletonList";

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
