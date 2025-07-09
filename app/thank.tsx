import common from "@/src/constants/common";
import { local } from "@/src/constants/local";
import { Colors } from "@/src/constants/variables";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Thank = () => {
  const colors = useThemeColors();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[common.regularxxLarge25, styles.headerText]}>
        {local.thankForRideHeaderMessage}
      </Text>

      <Text style={[common.regularLarge, styles.messageText]}>
        {local.thankForRideMessage}
      </Text>

      <Pressable onPress={() => router.dismiss()} style={styles.btnContainer}>
        <Text
          style={[
            common.semiBoldLarge,
            { color: Colors.dark.text, paddingVertical: 10 },
          ]}
        >
          {local.backToHome}
        </Text>
      </Pressable>
    </View>
  );
};

export default Thank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    marginTop: 60,
    textAlign: "center",
  },
  messageText: {
    marginTop: 25,
    textAlign: "center",
  },
  btnContainer: {
    borderWidth: 1,
    marginTop: 70,
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: Colors.dark.background,
  },
});
