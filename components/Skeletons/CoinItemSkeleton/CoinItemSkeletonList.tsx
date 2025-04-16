import React from "react";
import { Dimensions, View } from "react-native";
import CoinItemSkeleton from "./CoinItemSkeleton";

export default function CoinItemSkeletonList() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <View style={{ paddingBottom: 4 }} key={index}>
          <CoinItemSkeleton />
        </View>
      ))}
    </>
  );
}
