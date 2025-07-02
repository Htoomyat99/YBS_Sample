import common from "@/src/constants/common";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

const NotiDetail = () => {
  const colors = useThemeColors();

  const { content, title } = useLocalSearchParams<{
    content: string;
    title: string;
  }>();

  return (
    <View style={[common.flexPadding, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { borderBottomColor: colors.divider }]}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Pressable
            style={{ padding: 5 }}
            onPress={() => Alert.alert("Share", "Share this notification?")}
          >
            <FontAwesome5 name="share" size={26} color={colors.secondIcon} />
          </Pressable>

          <Pressable
            onPress={() =>
              Alert.alert("Delete", "Are you sure you want to delete?")
            }
            style={styles.deleteBtnContainer}
          >
            <Octicons name="trash" size={26} color={colors.secondIcon} />
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={[styles.content, { color: colors.text }]}>{content}</Text>
      </View>
    </View>
  );
};

export default NotiDetail;

const styles = StyleSheet.create({
  container: {
    ...common.flexRowBetweenCenter,
    marginTop: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  title: {
    ...common.semiBoldxLarge,
    maxWidth: "70%",
  },
  deleteBtnContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  content: {
    ...common.regularSmall,
    textAlign: "justify",
    lineHeight: 18,
  },
});
