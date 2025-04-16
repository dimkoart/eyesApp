import { Stack } from "expo-router";
import React from "react";
import { colors } from "@/constants/Colors";
import { Image, Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[coinId]/index"
        options={({ route }) => {
          const coinName = route.params?.coinName;
          const coinImg = route.params?.imageUrl;

          return {
            headerTitle: () => (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Image
                  source={{
                    uri: coinImg,
                  }}
                  style={{ width: 24, height: 24 }}
                />
                <Text style={{ color: colors.contentPrimary, fontSize: 18 }}>
                  {coinName}
                </Text>
              </View>
            ),
            headerBackTitle: "Back",
            headerTintColor: colors.contentPrimary,
            headerStyle: {
              backgroundColor: colors.basePrimary,
            },
          };
        }}
      />
    </Stack>
  );
}
