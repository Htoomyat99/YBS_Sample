/* eslint-disable react-hooks/exhaustive-deps */
import { Destination } from "@/src/common/dummy/DummyData";
import { DestinationType } from "@/src/common/dummy/dummyType";
import common from "@/src/constants/common";
import { local } from "@/src/constants/local";
import { Colors } from "@/src/constants/variables";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useModalStore } from "@/src/state/modalStore";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const DrivingDestinations = () => {
  const colors = useThemeColors();
  const busNo = "78";
  const fromRoute = "Seik Pyoe Yay";
  const toRoute = "City Mall";
  const duration = "2 min";

  const { dismiss } = useBottomSheetModal();
  const router = useRouter();

  const showModal = useModalStore((state) => state.showModal);
  const hideModal = useModalStore((state) => state.hideModal);

  useEffect(() => {
    setTimeout(() => {
      showModal(<AlertModal />);
    }, 1500);
  }, []);

  const busRouteRenderItem = ({ item }: { item: DestinationType }) => {
    return (
      <View style={{ flexDirection: "row", paddingHorizontal: 15 }}>
        <View style={{ alignItems: "center", marginRight: 25 }}>
          <View
            style={[
              styles.dotContainer,
              {
                backgroundColor:
                  item.id !== Destination.length
                    ? Colors.light.main
                    : "#D72638",
              },
            ]}
          />

          {item.id !== Destination.length && (
            <View
              style={[
                styles.tileContainer,
                { opacity: item.id !== Destination.length - 1 ? 1 : 0 },
              ]}
            />
          )}
        </View>

        <View style={{ gap: 5 }}>
          <Text
            style={[
              item.id === Destination.length
                ? common.semiBoldLarge
                : common.regularLarge,
              {
                color: "gray",
              },
            ]}
          >
            {item.route}
          </Text>
        </View>
      </View>
    );
  };

  const AlertModal = () => (
    <View style={{ alignItems: "center", maxWidth: "75%", paddingVertical: 7 }}>
      <FontAwesome6 name="bus" size={20} color={colors.icon} />

      <Text
        style={[common.semiBoldLarge, { textAlign: "center", marginTop: 20 }]}
      >
        The YBS - {busNo} will arrived your destination {toRoute}
        <Text style={{ color: Colors.light.red }}> within {duration}</Text>.
        Preparing to get off.
      </Text>

      <Text
        style={[
          common.regularLarge,
          { color: "#1E1E1E", marginTop: 20, textAlign: "center" },
        ]}
      >
        {local.alertText}
      </Text>

      <Pressable
        onPress={() => {
          hideModal();
          router.push("/thank");
          dismiss();
        }}
        style={{
          marginTop: 30,
          alignSelf: "flex-end",
          borderRadius: 20,
          backgroundColor: colors.main,
        }}
      >
        <Text
          style={[
            common.semiBoldLarge,
            { paddingHorizontal: 15, paddingVertical: 7 },
          ]}
        >
          {local.okay}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <View style={{ marginTop: 20 }}>
      <View style={[common.flexRowAlignCenter, { gap: 35 }]}>
        <View style={[common.flexRowAlignCenter, styles.headerContainer]}>
          <FontAwesome6 name="bus" size={20} color={"#FFFFFF"} />

          <Text style={[common.regularLarge, { color: "#FFFFFF" }]}>
            {busNo}
          </Text>
        </View>

        <Text style={[common.regularLarge, { color: Colors.light.text }]}>
          {fromRoute} - {toRoute}
        </Text>
      </View>

      <View style={styles.line} />

      <FlatList
        data={Destination}
        showsVerticalScrollIndicator={false}
        renderItem={busRouteRenderItem}
      />
    </View>
  );
};

export default DrivingDestinations;

const styles = StyleSheet.create({
  headerContainer: {
    gap: 7,
    backgroundColor: Colors.light.blue,
    padding: 7,
    borderRadius: 10,
  },
  line: {
    width: 10,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.light.blue,
    marginLeft: 19,
  },
  dotContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  tileContainer: {
    width: 10,
    height: 40,
    backgroundColor: Colors.light.blue,
    marginTop: 1,
    borderRadius: 5,
  },
});
