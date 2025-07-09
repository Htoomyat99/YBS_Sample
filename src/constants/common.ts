import { StyleSheet } from "react-native";
import { FontSize } from "./variables";

export default StyleSheet.create({
  //Flex_Style
  flexCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
  },
  flexPadding: {
    flex: 1,
    paddingHorizontal: 15,
  },
  flexRowBetweenCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRowAlignEnd: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  flexRowAlignCenter: {
    flexDirection: "row",
    alignItems: "center",
  },

  //FONT_SIZES
  regularXsmall: {
    fontFamily: "RobotoRegular",
    fontSize: FontSize.xSmall,
  },
  regularSmall: {
    fontFamily: "RobotoRegular",
    fontSize: FontSize.small,
  },
  regularMedium13: {
    fontFamily: "RobotoRegular",
    fontSize: FontSize.medium13,
  },
  regularMedium: {
    fontFamily: "RobotoRegular",
    fontSize: FontSize.medium,
  },
  regularLarge: {
    fontFamily: "RobotoRegular",
    fontSize: FontSize.large,
  },
  regularxLarge: {
    fontFamily: "RobotoRegular",
    fontSize: FontSize.xLarge,
  },
  regularxxLarge: {
    fontFamily: "RobotoRegular",
    fontSize: FontSize.xxLarge,
  },
  regularxxLarge25: {
    fontFamily: "RobotoRegular",
    fontSize: FontSize.xxLarge25,
  },

  semiBoldSmall: {
    fontFamily: "RobotoSemiBold",
    fontSize: FontSize.small,
  },
  semiBoldMedium: {
    fontFamily: "RobotoSemiBold",
    fontSize: FontSize.medium,
  },
  semiBoldLarge: {
    fontFamily: "RobotoSemiBold",
    fontSize: FontSize.large,
  },
  semiBoldxLarge: {
    fontFamily: "RobotoSemiBold",
    fontSize: FontSize.xLarge,
  },
  semiBoldHeader: {
    fontFamily: "RobotoSemiBold",
    fontSize: FontSize.xxLarge22,
  },
});
