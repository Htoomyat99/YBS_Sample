import { YbsGuideData } from "@/src/common/dummy/DummyData";
import { YbsGuideDataType } from "@/src/common/dummy/dummyType";
import { isAndroid, isIos } from "@/src/common/utils/detectPlatform";
import common from "@/src/constants/common";
import { local } from "@/src/constants/local";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const Guide = () => {
  const colors = useThemeColors();

  const [search, setSearch] = useState("");

  const renderItem = ({ item }: { item: YbsGuideDataType }) => {
    return (
      <View
        style={[
          styles.itemContainer,
          {
            backgroundColor: colors.inputBackground,
            shadowColor: colors.text,
          },
        ]}
      >
        <View style={[styles.square, { backgroundColor: item.routeColor }]}>
          <Text style={styles.busNo}>{item.busNo}</Text>
        </View>

        <View style={common.flexRow}>
          <Text style={[styles.startPoint, { color: colors.text }]}>
            {item.startPoint}
          </Text>

          <View style={styles.iconContainer}>
            <FontAwesome6
              name="arrows-left-right"
              size={24}
              color={colors.text}
            />
          </View>

          <Text style={[styles.startPoint, { color: colors.text }]}>
            {item.endPoint}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={isIos ? "padding" : "height"}
      keyboardVerticalOffset={isAndroid ? 100 : 20}
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.infoText, { color: colors.text }]}>
          {local.findBusInfo}
        </Text>

        <View
          style={[
            styles.inputContainer,
            { backgroundColor: colors.inputBackground },
          ]}
        >
          <Feather name="menu" size={24} color={colors.icon} />

          <TextInput
            style={[styles.input, { color: colors.text }]}
            placeholder={local.enterBusNo}
            value={search}
            onChangeText={setSearch}
            placeholderTextColor={colors.placeholderText}
          />
        </View>

        <FlatList
          style={{ marginTop: 8 }}
          contentContainerStyle={{ paddingBottom: isIos ? 100 : 20 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          data={YbsGuideData}
          renderItem={renderItem}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Guide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  infoText: {
    marginTop: 15,
    ...common.regularLarge,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: isIos ? 12 : 7,
  },
  input: {
    flex: 1,
    ...common.regularLarge,
  },

  //renderItem
  itemContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 1.5,
    gap: 5,
    borderRadius: 2,
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  square: {
    width: 83,
    height: 61,
    alignItems: "center",
    justifyContent: "center",
  },
  busNo: {
    ...common.semiBoldHeader,
    color: "#FFFFFF",
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",
  },
  startPoint: {
    ...common.regularMedium13,
    width: "40%",
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
  },
  iconContainer: {
    padding: 12,
    alignItems: "center",
  },
});
