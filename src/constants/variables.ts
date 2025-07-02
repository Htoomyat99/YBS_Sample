import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const Colors = {
  light: {
    main: "#FFD32C",
    divider: "#D9D9D9",

    text: "#11181C",
    background: "#FFFFFF",
    inputBackground: "#FAFAFA",
    icon: "#687076",
    secondIcon: "#1D1B20",
    placeholderText: "#49454F",

    lightmain: "#F8D44C21",
    tabBarBackground: "#F3EDF7",
  },
  dark: {
    main: "#FFD32C",
    divider: "#D9D9D9",

    text: "#ECEDEE",
    background: "#151718",
    inputBackground: "#232629",
    icon: "#9BA1A6",
    secondIcon: "#9BA1A6",
    placeholderText: "#A0A0A0",
    lightmain: "#FFD32C33",
    tabBarBackground: "#232629",
  },
};

export const FontSize = {
  xxSmall: 8,
  xSmall: 10,
  small11: 11,
  small: 12,
  medium13: 13,
  medium: 14,
  large15: 15,
  large: 16,
  xLarge: 18,
  xxLarge: 20,
  xxxLarge: 22,
};
