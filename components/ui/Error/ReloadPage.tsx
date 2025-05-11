import { Dimensions, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "../IconSymbol";
import { ThemedText } from "@/components/ThemedText";
import { colors } from "@/constants/Colors";

type Props = { onPress?: () => void };

export function ReloadPage({ onPress }: Props) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("window").height / 2,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <IconSymbol size={70} name="goforward" color={colors.contentPrimary} />
      </TouchableOpacity>
      <ThemedText style={{ fontSize: 20 }}>Something went wrong...</ThemedText>
      <ThemedText style={{ fontSize: 20 }}>
        Please try reload this page
      </ThemedText>
    </View>
  );
}
