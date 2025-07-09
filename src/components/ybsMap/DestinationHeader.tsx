import common from "@/src/constants/common";
import { local } from "@/src/constants/local";
import { Colors } from "@/src/constants/variables";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const DestinationHeader = () => {
  const busNo = 78;
  const startPoint = "Seik Pyoe Yay (TTC)";
  const endPoint = "Seint John (City Mall)";
  const colors = useThemeColors();

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(30, { duration: 2000 });
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  return (
    <View style={styles.container}>
      <View style={[common.flexRowAlignCenter, { gap: 10 }]}>
        <View style={styles.busNoContainer}>
          <Text style={[common.regularLarge, styles.busNo]}>{busNo}</Text>
        </View>

        <Text style={common.regularLarge}>{local.driveDestination}</Text>
      </View>

      <View style={[common.flexRowBetweenCenter, { marginTop: 20 }]}>
        <View style={[common.flexRowAlignCenter, { gap: 5 }]}>
          <Ionicons
            name="location-outline"
            size={18}
            color={colors.lightGreen}
          />

          <Text
            numberOfLines={1}
            style={[common.regularXsmall, { maxWidth: 160 }]}
          >
            {startPoint}
          </Text>
        </View>

        <View style={[common.flexRowAlignCenter, { gap: 5 }]}>
          <Text
            numberOfLines={1}
            style={[common.regularXsmall, { maxWidth: 160 }]}
          >
            {endPoint}
          </Text>

          <Ionicons name="location-outline" size={18} color={colors.red} />
        </View>
      </View>

      {/* <ProgreessBar /> */}
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, animatedStyle]} />
      </View>
    </View>
  );
};

export default DestinationHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  busNoContainer: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.blue,
    borderRadius: 7,
  },
  busNo: {
    color: Colors.dark.text,
    padding: 10,
  },
  progressBarContainer: {
    height: 10,
    width: "95%",
    backgroundColor: "#BFD1D9",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2ECC71",
    borderRadius: 10,
  },
});
