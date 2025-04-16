import React from "react";
import { StyleSheet, TextInputProps, View, ViewStyle } from "react-native";
import { SearchInput } from "../ui/SearchInput";
import { colors } from "@/constants/Colors";

export type SearchInputType = {
  search: string;
  handleChangeSearch: (value: string) => void;
  inputProps?: Omit<TextInputProps, "style">;
  handleCleanText?: () => void;
};

type Props = SearchInputType & {
  iconRightPress?: () => void;
  containerStyle?: ViewStyle;
  handleCleanText?: () => void;
};

export default function HeaderComponent(props: Props) {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <SearchInput
        handleChangeSearch={props.handleChangeSearch}
        handleCleanText={props.handleCleanText}
        inputProps={props.inputProps}
        search={props.search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.basePrimary,
    borderBottomColor: colors.primaryOverlayWhite,
    borderWidth: 1,
    flexDirection: "row",
    height: 48,
    paddingHorizontal: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    overflow: "hidden",
  },
});
