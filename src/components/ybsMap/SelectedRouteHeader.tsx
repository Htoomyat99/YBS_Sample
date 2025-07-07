import common from "@/src/constants/common";
import { Colors } from "@/src/constants/variables";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const SelectedRouteHeader = ({
  isTrack,
  trackHandler,
}: {
  isTrack: boolean;
  trackHandler: () => void;
}) => {
  const colors = useThemeColors();

  const busNo = "78";
  const fromRoute = "Seik Pyoe Yay";
  const toRoute = "City Mall";
  const distance = "3.6";

  return (
    <View style={[common.flexRowBetweenCenter, { marginTop: 20 }]}>
      <View
        style={[
          common.flexRowAlignCenter,
          {
            gap: 10,
            backgroundColor: Colors.light.blue,
            padding: 5,
            borderRadius: 10,
          },
        ]}
      >
        <FontAwesome6 name="bus" size={24} color={Colors.dark.text} />

        <Text style={[common.regularLarge, { color: Colors.dark.text }]}>
          {busNo}
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          maxWidth: "50%",
        }}
      >
        <Text
          numberOfLines={1}
          style={[common.regularLarge, { color: colors.text }]}
        >
          {fromRoute} - {toRoute}
        </Text>

        <Text style={[common.regularLarge, { color: colors.text }]}>
          {distance} km
        </Text>
      </View>

      <Pressable
        onPress={trackHandler}
        style={[
          common.flexRowAlignCenter,
          {
            gap: 3,
            backgroundColor: isTrack ? Colors.light.lightGreen : "#EEEEEE",
            paddingVertical: 5,
            paddingHorizontal: 12,
            borderRadius: 20,
          },
        ]}
      >
        <MaterialIcons
          name="route"
          size={24}
          color={isTrack ? Colors.light.secondIcon : "#777777"}
        />

        <Text
          style={[
            common.regularLarge,
            { color: isTrack ? Colors.light.text : "#777777" },
          ]}
        >
          Track
        </Text>
      </Pressable>
    </View>
  );
};

export default SelectedRouteHeader;
