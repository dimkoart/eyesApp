import { colors } from "@/constants/Colors";
import { Text, type TextProps, StyleSheet, TextStyle } from "react-native";

const defaultStyle: TextStyle = {
  fontFamily: "Avenir",
  color: colors.contentPrimary,
};

export function ThemedText(props: TextProps) {
  return <Text {...props} style={[defaultStyle, props.style]} />;
}
