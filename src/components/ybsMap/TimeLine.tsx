import { BusRoutes } from "@/src/common/dummy/DummyData";
import { BusRoutesType } from "@/src/common/dummy/dummyType";
import common from "@/src/constants/common";
import { local } from "@/src/constants/local";
import { Colors } from "@/src/constants/variables";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TimeLine = ({ isTrack }: { isTrack: boolean }) => {
  const currentTime = "9:30 AM";
  const estimatedArrivalTime = "09:45";

  const busRouteRenderItem = ({ item }: { item: BusRoutesType }) => {
    return (
      <View
        style={{ flexDirection: "row", paddingHorizontal: 15 }}
        key={item.id.toString()}
      >
        <View style={{ alignItems: "center", marginRight: 25 }}>
          <View
            style={[
              styles.dotContainer,
              {
                backgroundColor:
                  item.id === 1 || (item.isNearest && isTrack)
                    ? Colors.light.main
                    : item.isNearest && !isTrack
                    ? "#777777"
                    : "#CCCCCC",
                borderWidth: item.id === 1 ? 1 : 0,
              },
            ]}
          />

          {item.id !== BusRoutes.length && (
            <View
              style={[
                styles.tileContainer,
                {
                  backgroundColor:
                    item.id === 1 ? Colors.light.blue : "#777777",
                },
              ]}
            />
          )}
        </View>

        <View style={{ gap: 5 }}>
          <Text
            style={[
              item.isNearest && isTrack
                ? common.semiBoldLarge
                : common.regularLarge,
              {
                color: item.isNearest && isTrack ? Colors.light.blue : "gray",
                marginTop:
                  item.id === 1 || (item.isNearest && !isTrack) ? -12 : 0,
              },
            ]}
          >
            {item.route} {item.isNearest && `- (Your nearest stop)`}
          </Text>

          {item.id === 1 ? (
            <Text style={[common.regularMedium13, { color: "gray" }]}>
              {currentTime}
            </Text>
          ) : item.isNearest && !isTrack ? (
            <Text style={[common.regularMedium13, { color: "gray" }]}>
              {local.estimatedTimeToArrive} - {estimatedArrivalTime}
            </Text>
          ) : null}
        </View>
      </View>
    );
  };

  return (
    <BottomSheetScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, marginTop: 20, paddingHorizontal: 15 }}
      contentContainerStyle={{ paddingVertical: 25 }}
    >
      {BusRoutes.map((item) => busRouteRenderItem({ item }))}
    </BottomSheetScrollView>
  );
};

export default TimeLine;

const styles = StyleSheet.create({
  dotContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "gray",
  },
  tileContainer: {
    width: 10,
    height: 60,
    marginTop: 1,
    borderRadius: 5,
  },
});
