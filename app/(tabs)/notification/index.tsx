import { NotiData, NotiHeaderData } from "@/src/common/dummy/DummyData";
import { NotiHeaderType, NotiType } from "@/src/common/dummy/dummyType";
import common from "@/src/constants/common";
import { local } from "@/src/constants/local";
import { Colors } from "@/src/constants/variables";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Notification = () => {
  const router = useRouter();
  const colors = useThemeColors();

  const [selected, setSelected] = useState("General");

  const goNotiDetail = (item: NotiType) => {
    router.push({
      pathname: "/(tabs)/notification/detail",
      params: {
        content: item.content,
        title: item.title,
      },
    });
  };

  const deleteNotification = () => {
    Alert.alert(
      "Delete Notification",
      "Are you sure you want to delete this notification?"
    );
  };

  if (NotiData.length <= 0) {
    return (
      <View style={styles.emptyNotiContainer}>
        <Ionicons name="notifications-outline" size={135} color={colors.main} />

        <Text style={[styles.emptyNotiText, { color: colors.placeholderText }]}>
          {local.emptyNotification}
        </Text>
      </View>
    );
  }

  const renderHeaderItem = ({ item }: { item: NotiHeaderType }) => {
    return (
      <Pressable
        onPress={() => setSelected(item.title)}
        style={[
          styles.topTabContainer,
          {
            backgroundColor:
              selected === item.title ? colors.main : "transparent",
          },
        ]}
      >
        <Text
          style={[
            common.regularMedium13,
            {
              color: selected === item.title ? Colors.light.text : colors.text,
            },
          ]}
        >
          {item.title}
        </Text>
      </Pressable>
    );
  };

  const renderItem = ({ item }: { item: NotiType }) => {
    return (
      <View style={styles.itemMainContainer}>
        <View
          style={[styles.itemContainer, { borderBottomColor: colors.divider }]}
        >
          <View style={[common.flexRowAlignEnd, { gap: 20 }]}>
            <Ionicons
              name="notifications-outline"
              size={26}
              color={colors.secondIcon}
              style={[
                styles.icon,
                {
                  backgroundColor: colors.lightmain,
                },
              ]}
            />

            <View style={{ maxWidth: "84%" }}>
              <View style={common.flexRowBetweenCenter}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[styles.title, { color: colors.text }]}
                >
                  {item.title}
                </Text>

                <Text style={[common.regularSmall, { color: colors.text }]}>
                  {item.date}
                </Text>
              </View>

              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[styles.content, { color: colors.text }]}
              >
                {item.content}
              </Text>
            </View>
          </View>

          <View style={[common.flexRowBetweenCenter, { marginTop: 30 }]}>
            <Pressable onPress={deleteNotification} style={styles.btnContainer}>
              <Text style={[common.regularMedium, { color: colors.text }]}>
                {local.delete}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => goNotiDetail(item)}
              style={[styles.btnContainer, { backgroundColor: colors.main }]}
            >
              <Text style={[common.regularMedium]}>{local.read}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ marginVertical: 20 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={NotiHeaderData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderHeaderItem}
          contentContainerStyle={{ paddingLeft: 15 }}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={NotiData.filter((item) => item.type === selected) ?? []}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  emptyNotiContainer: {
    ...common.flexCenter,
    padding: 20,
    gap: 20,
  },
  emptyNotiText: {
    ...common.regularxLarge,
    textAlign: "center",
    lineHeight: 25,
  },
  topTabContainer: {
    borderWidth: 1,
    borderColor: "#FFE995",
    marginRight: 15,
    paddingHorizontal: 20,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  itemMainContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  itemContainer: {
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    textAlignVertical: "center",
    textAlign: "center",
  },
  title: {
    ...common.semiBoldLarge,
    maxWidth: "70%",
  },
  content: {
    ...common.regularSmall,
    marginTop: 8,
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: Colors.light.main,
    width: 166,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
