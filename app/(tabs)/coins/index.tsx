import getCryptoCoinList from "@/api/coinmarketcapApi/getCryptoCoinList";
import CoinItem from "@/components/CoinItem";
import CoinList from "@/components/List/CoinList";
import HeaderComponent from "@/components/List/HeaderComponent";
import { Coin } from "@/types/coinListTypes";

export default function TabTwoScreen() {
  const { data, refetch, isPending } = getCryptoCoinList({});

  const renderItem = (data: Coin) => {
    return <CoinItem data={data} />;
  };

  return (
    <>
      <HeaderComponent
        search=""
        handleChangeSearch={() => {}}
        containerStyle={{ marginBottom: 4 }}
      />
      <CoinList
        data={data}
        isFetching={isPending}
        onRefresh={refetch}
        renderItem={renderItem}
      />
    </>
  );
}
