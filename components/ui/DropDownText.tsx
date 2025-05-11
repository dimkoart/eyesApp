import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { IconSymbol } from "./IconSymbol";
import { colors } from "@/constants/Colors";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";

type Props = {
  text?: string;
  styleText?: StyleProp<TextStyle>;
  title?: string;
  styleTitle?: StyleProp<TextStyle>;
};

export function DropDownText({ text, styleText, styleTitle, title }: Props) {
  const height = useSharedValue(250);

  const [isOpenReact, setIsOpenReact] = useState(false);
  const isOpen = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(height.value, { duration: 200 }),
  }));

  const toggle = () => {
    const newValue = !isOpen.value;
    isOpen.value = newValue;
    setIsOpenReact(newValue);
    height.value = newValue ? 500 : 250;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleContainer} onPress={toggle}>
        <ThemedText style={styleTitle}>{title}</ThemedText>
        <IconSymbol
          size={20}
          name={isOpenReact ? "chevron.up" : "chevron.down"}
          color={colors.contentPrimary}
        />
      </TouchableOpacity>
      <Animated.View style={animatedStyle}>
        <ThemedText style={styleText}>{text}</ThemedText>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
