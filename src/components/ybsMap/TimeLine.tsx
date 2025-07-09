import { BusRoutes } from "@/src/common/dummy/DummyData";
import { BusRoutesType } from "@/src/common/dummy/dummyType";
import common from "@/src/constants/common";
import { local } from "@/src/constants/local";
import { Colors } from "@/src/constants/variables";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const TimeLine = ({ isTrack }: { isTrack: boolean }) => {
  const currentTime = "9:30 AM";
  const estimatedArrivalTime = "09:45";

  const busRouteRenderItem = ({ item }: { item: BusRoutesType }) => {
    return (
      <View style={{ flexDirection: "row", paddingHorizontal: 15 }}>
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
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={BusRoutes}
        showsVerticalScrollIndicator={false}
        renderItem={busRouteRenderItem}
        contentContainerStyle={{ paddingTop: 20 }}
      />
    </View>
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
