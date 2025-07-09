/* eslint-disable react-hooks/exhaustive-deps */
import { AvailableRoutes } from "@/src/common/dummy/DummyData";
import { AvailableRoutesType } from "@/src/common/dummy/dummyType";
import common from "@/src/constants/common";
import { local } from "@/src/constants/local";
import { Colors } from "@/src/constants/variables";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const AvailableRoute = ({ goItemDetail }: { goItemDetail: () => void }) => {
  const colors = useThemeColors();
  const fromRoute = "Seik Pyoe Yay";
  const toRoute = "City Mall (Saint John)";

  const renderItem = useCallback(
    ({ item }: { item: AvailableRoutesType }) => (
      <Pressable
        onPress={goItemDetail}
        style={{
          ...styles.itemContainer,
          borderBottomColor: colors.divider,
          borderBottomWidth: item.id === AvailableRoute.length - 1 ? 0 : 1,
        }}
      >
        <View style={common.flexRowBetweenCenter}>
          <View style={[common.flexRowAlignCenter, styles.busIconContainer]}>
            <FontAwesome6 name="bus" size={24} color={Colors.dark.text} />

            <Text style={[common.regularLarge, { color: Colors.dark.text }]}>
              {item.busNo}
            </Text>
          </View>

          <Text style={[common.regularLarge, { color: colors.text }]}>
            {item.time} min
          </Text>
        </View>

        <View style={[common.flexRowBetweenCenter, { marginTop: 5 }]}>
          <Text
            numberOfLines={1}
            style={[common.regularMedium13, { color: colors.placeholderText }]}
          >
            Schedule at {item.scheduleTime} from {item.fromRoute}
          </Text>

          <Text
            style={[common.regularMedium13, { color: colors.placeholderText }]}
          >
            {item.cost} MMK
          </Text>
        </View>
      </Pressable>
    ),
    []
  );

  return (
    <>
      <Text style={[common.regularxxLarge, { color: colors.text }]}>
        {local.availableRoutes}
      </Text>

      <View style={{ marginTop: 20, ...common.flexRowBetweenCenter }}>
        <View style={styles.container}>
          <Text
            numberOfLines={1}
            style={[common.regularMedium13, { color: Colors.dark.text }]}
          >
            {fromRoute}
          </Text>
        </View>

        <FontAwesome6 name="arrow-right" size={20} color={colors.secondIcon} />

        <View style={styles.container}>
          <Text
            numberOfLines={1}
            style={[common.regularMedium13, { color: Colors.dark.text }]}
          >
            {toRoute}
          </Text>
        </View>
      </View>

      <BottomSheetFlatList
        data={AvailableRoutes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ marginTop: 10 }}
      />
    </>
  );
};

export default AvailableRoute;

const styles = StyleSheet.create({
  container: {
    width: "42%",
    backgroundColor: "#000000DD",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingHorizontal: 15,
  },
  routeName: {
    ...common.regularMedium13,
  },
  itemContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  busIconContainer: {
    gap: 10,
    backgroundColor: Colors.light.blue,
    padding: 7,
    borderRadius: 10,
  },
});
