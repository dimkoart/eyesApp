import { colors } from "@/constants/Colors";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { IconSymbol } from "./IconSymbol";

export type SearchInputType = {
  search: string;
  handleChangeSearch: (value: string) => void;
  inputProps?: Omit<TextInputProps, "style">;
  handleCleanText?: () => void;
};

export function SearchInput(props: SearchInputType) {
  return (
    <View style={styles.inputContainer}>
      <View style={{ marginLeft: 8 }}>
        <IconSymbol
          size={24}
          name={"magnifyingglass"}
          color={colors.contentTertiary}
        />
      </View>
      <TextInput
        enterKeyHint="search"
        inputMode="search"
        maxLength={50}
        onChangeText={props.handleChangeSearch}
        placeholder={"Search"}
        placeholderTextColor={colors.contentTertiary}
        style={styles.input}
        value={props.search}
        {...props.inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: "center",
    height: 48,
    justifyContent: "center",
    paddingHorizontal: 10,
    width: 48,
  },
  input: {
    color: colors.contentPrimary,
    flex: 1,
    fontFamily: "Noto Sans",
    fontSize: 15,
    height: 36,
    paddingHorizontal: 8,
    textAlignVertical: "center",
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: colors.baseSecondary,
    borderColor: colors.baseSecondary,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    overflow: "hidden",
  },
});
