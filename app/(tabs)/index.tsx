import { locationList } from "@/LocationList";
import { useBottomTabOverflow } from "@components/ui/TabBarBackground.ios";
import { AppleMaps, GoogleMaps } from "expo-maps";
import React, { useState } from "react";
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const bottom = useBottomTabOverflow();
  const [locationIndex, setLocationIndex] = useState(0);

  const cameraPosition = {
    coordinates: {
      latitude: locationList[locationIndex].stores[0].point[0],
      longitude: locationList[locationIndex].stores[0].point[1],
    },
    zoom: 10,
  };

  const renderMapControls = () => (
    <>
      <View style={{ flex: 8 }} pointerEvents="none">
        <View style={styles.controlsContainer} pointerEvents="auto">
          <Button
            title="Prev"
            onPress={() => setLocationIndex(locationIndex - 1)}
          />

          <Button
            title="Next"
            onPress={() => setLocationIndex(locationIndex + 1)}
          />
        </View>
      </View>
    </>
  );

  if (Platform.OS === "ios") {
    return (
      <>
        <AppleMaps.View
          style={StyleSheet.absoluteFill}
          cameraPosition={cameraPosition}
        />
        <SafeAreaView
          style={{ flex: 1, paddingBottom: bottom }}
          pointerEvents="box-none"
        >
          {/* {renderMapControls()} */}
        </SafeAreaView>
      </>
    );
  } else if (Platform.OS === "android") {
    return (
      <GoogleMaps.View style={{ flex: 1 }} cameraPosition={cameraPosition} />
    );
  } else {
    return <Text>Maps are only available on Android and iOS</Text>;
  }
}

const styles = StyleSheet.create({
  controlsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
