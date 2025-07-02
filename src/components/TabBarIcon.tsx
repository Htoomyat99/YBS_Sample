import { IconSymbol } from "@components/ui/IconSymbol";
import { useThemeColors } from "@hooks/useThemeColors";
import { SFSymbol } from "expo-symbols";
import React from "react";
import { StyleSheet, View } from "react-native";

const TabBarIcon = ({
  focused,
  color,
  name,
}: {
  focused: boolean;
  color: string;
  name: SFSymbol;
}) => {
  const colors = useThemeColors();

  return (
    <View
      style={[
        styles.tabBarIconContainer,
        {
          backgroundColor: focused ? colors.main : "transparent",
        },
      ]}
    >
      <IconSymbol size={25} name={name} color={color} />
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  tabBarIconContainer: {
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
});
