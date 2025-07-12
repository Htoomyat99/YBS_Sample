import { Destination } from "@/src/common/dummy/DummyData";
import { DestinationType } from "@/src/common/dummy/dummyType";
import common from "@/src/constants/common";
import { local } from "@/src/constants/local";
import { Colors } from "@/src/constants/variables";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import { useModalStore } from "@/src/state/modalStore";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  BottomSheetScrollView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
      <View
        style={{ flexDirection: "row", paddingHorizontal: 20 }}
        key={item.id.toString()}
      >
        <View style={{ alignItems: "center", marginRight: 25 }}>
          {item.id !== 1 && (
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
          )}

          {item.id !== Destination.length && (
            <View
              style={[
                styles.tileContainer,
                { marginLeft: item.id === 1 ? 5 : 0 },
                { opacity: item.id !== Destination.length - 1 ? 1 : 0 },
              ]}
            />
          )}
        </View>

        <View style={{ gap: 5, opacity: item.id === 1 ? 0 : 1 }}>
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
    <View style={styles.alertModal}>
      <FontAwesome6 name="bus" size={20} color={colors.icon} />

      <Text style={[common.semiBoldLarge, styles.infoText]}>
        The YBS - {busNo} will arrived your destination {toRoute}
        <Text style={{ color: Colors.light.red }}> within {duration}</Text>.
        Preparing to get off.
      </Text>

      <Text style={[common.regularLarge, styles.alertText]}>
        {local.alertText}
      </Text>

      <Pressable
        onPress={() => {
          hideModal();
          router.push("/thank");
          dismiss();
        }}
        style={[styles.btnContainer, { backgroundColor: colors.main }]}
      >
        <Text style={[common.semiBoldLarge, styles.okText]}>{local.okay}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 15 }}>
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

      {/* <View style={styles.line} /> */}

      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {Destination.map((item) => busRouteRenderItem({ item }))}
      </BottomSheetScrollView>
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
    marginLeft: 25,
  },
  dotContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  tileContainer: {
    width: 10,
    height: 45,
    backgroundColor: Colors.light.blue,
    marginTop: 1,
    borderRadius: 5,
  },

  //alertMoal
  alertModal: {
    alignItems: "center",
    maxWidth: "75%",
    paddingVertical: 7,
  },
  infoText: {
    textAlign: "center",
    marginTop: 20,
  },
  alertText: {
    color: "#1E1E1E",
    marginTop: 20,
    textAlign: "center",
  },
  btnContainer: {
    marginTop: 30,
    alignSelf: "flex-end",
    borderRadius: 20,
  },
  okText: {
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
});
