/* eslint-disable react-hooks/exhaustive-deps */
import {
  markersGoogle,
  polylineCoordinates,
} from "@/src/common/dummy/DummyData";
import AvailableRoute from "@/src/components/ybsMap/AvailableRoute";
import DestinationHeader from "@/src/components/ybsMap/DestinationHeader";
import DrivingDestinations from "@/src/components/ybsMap/DrivingDestinations";
import SelectedRouteHeader from "@/src/components/ybsMap/SelectedRouteHeader";
import TimeLine from "@/src/components/ybsMap/TimeLine";
import YbsMapSearch from "@/src/components/ybsMap/YbsMapSearch";
import common from "@/src/constants/common";
import { Colors } from "@/src/constants/variables";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import * as Location from "expo-location";
import { AppleMaps, GoogleMaps } from "expo-maps";
import { GoogleMapsMapType } from "expo-maps/build/google/GoogleMaps.types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  BackHandler,
  Keyboard,
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function LocationPermissionExample() {
  const [permissionStatus, setPermissionStatus] = useState<
    "granted" | "denied" | "undetermined" | null
  >(null);

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [bottomSheetIndex, setBottomSheetIndex] = useState<number | null>(null);
  const [bottomSheetPage, setBottomSheetPage] = useState<number>(0);
  const [isTrack, setIsTrack] = useState(false);

  const cameraPosition = {
    coordinates: {
      latitude: location?.coords.latitude,
      longitude: location?.coords.longitude,
    },
    zoom: 12,
  };

  useEffect(() => {
    const onHardwareBackPress = () => {
      if (bottomSheetPage === 1) {
        setBottomSheetPage((prev) => prev - 1);
        bottomSheetRef.current?.dismiss();
        Keyboard.dismiss();
        return true;
      }

      if (bottomSheetPage > 1) {
        setBottomSheetPage((prev) => prev - 1);
        Keyboard.dismiss();
        return true;
      }

      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onHardwareBackPress
    );
    return () => backHandler.remove();
  }, [bottomSheetPage]);

  // Using 'any' for mapRef due to missing type export in expo-maps
  const mapRef = useRef<any>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const requestPermission = async () => {
    const { status, canAskAgain } =
      await Location.requestForegroundPermissionsAsync();
    setPermissionStatus(status);

    if (status === "granted") {
      // Permission granted, proceed as normal
      const location = await Location.getCurrentPositionAsync();
      setLocation(location);
      return;
    }

    if (canAskAgain) {
      // User denied, but we can ask again
      Alert.alert(
        "Permission required",
        "You need to accept location permission to use this feature.",
        [
          {
            text: "Try Again",
            onPress: requestPermission,
          },
          {
            text: "Cancel",
            style: "cancel",
          },
        ]
      );
    } else {
      // User denied and cannot ask again (must go to settings)
      Alert.alert(
        "Permission required",
        "You have denied location permission. Please enable it in your device settings.",
        [
          {
            text: "Open Settings",
            onPress: () => Linking.openSettings(),
          },
          {
            text: "Cancel",
            style: "cancel",
          },
        ]
      );
    }
  };

  const goToCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied", "Location permission is required.");
      return;
    }
    console.log("Hed");
    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
    mapRef.current?.setCameraPosition({
      coordinates: {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      },
      zoom: 15,
    });
  };

  // variables
  const snapPoints = useMemo(() => ["20%", "60%"], []);

  const handlePresentModalPress = useCallback(() => {
    setBottomSheetPage(1);
    bottomSheetRef.current?.present();
  }, []);

  // callbacks
  const handleSheetChange = useCallback((index: number) => {
    setBottomSheetIndex(index);
    if (index === -1) {
      setBottomSheetPage(0);
      setIsTrack(false);
    }
  }, []);

  useEffect(() => {
    requestPermission();
  }, []);

  if (permissionStatus === "denied") {
    return (
      <View style={common.flexCenter}>
        <Text style={common.regularMedium}>
          Map permission is required to use this feature
        </Text>

        <Pressable
          onPress={requestPermission}
          style={{
            marginTop: 20,
            backgroundColor: "#146BED",
            borderRadius: 5,
          }}
        >
          <Text
            style={[
              common.regularMedium13,
              { padding: 15, color: Colors.dark.text },
            ]}
          >
            Request Permission
          </Text>
        </Pressable>
      </View>
    );
  }

  if (Platform.OS === "ios") {
    return <AppleMaps.View style={{ flex: 1 }} />;
  } else if (Platform.OS === "android") {
    return (
      <>
        <GoogleMaps.View
          ref={mapRef}
          style={[StyleSheet.absoluteFill]}
          cameraPosition={cameraPosition}
          markers={markersGoogle}
          properties={{
            isBuildingEnabled: true,
            isIndoorEnabled: true,
            mapType: GoogleMapsMapType.TERRAIN,
            isMyLocationEnabled: true,
            selectionEnabled: true,
          }}
          onMarkerClick={(e) => {
            console.log(e);
          }}
          polylines={[
            {
              color: "#FF0000",
              width: 10,
              coordinates: polylineCoordinates,
            },
          ]}
          uiSettings={{
            compassEnabled: true,
            indoorLevelPickerEnabled: true,
            mapToolbarEnabled: true,
            myLocationButtonEnabled: false,
            rotationGesturesEnabled: true,
            zoomControlsEnabled: false,
          }}
          // userLocation={{
          //   coordinates: {
          //     latitude: location?.coords.latitude,
          //     longitude: location?.coords.longitude,
          //   },
          //   followUserLocation: true,
          // }}
        />
        <Pressable
          onPress={goToCurrentLocation}
          style={{
            position: "absolute",
            bottom: 40,
            right: 20,
            backgroundColor: "white",
            elevation: 4,
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        >
          <Ionicons name="locate" size={25} color="#146BED" />
        </Pressable>

        <YbsMapSearch bottomSheetOpen={handlePresentModalPress} />

        <BottomSheetModal
          ref={bottomSheetRef}
          onChange={handleSheetChange}
          enableDynamicSizing={false}
          snapPoints={snapPoints}
          handleIndicatorStyle={{}}
          index={1}
        >
          <BottomSheetView style={{ flex: 1, paddingHorizontal: 15 }}>
            {bottomSheetPage === 1 ? (
              <AvailableRoute
                goItemDetail={() => setBottomSheetPage(bottomSheetPage + 1)}
              />
            ) : bottomSheetPage === 2 ? (
              bottomSheetIndex === 0 ? (
                <SelectedRouteHeader
                  isTrack={isTrack}
                  trackHandler={() => setIsTrack(!isTrack)}
                  onConfirmDestination={() =>
                    setBottomSheetPage((prev) => prev + 1)
                  }
                />
              ) : bottomSheetIndex === 1 ? (
                <>
                  <SelectedRouteHeader
                    isTrack={isTrack}
                    trackHandler={() => setIsTrack(!isTrack)}
                    onConfirmDestination={() =>
                      setBottomSheetPage((prev) => prev + 1)
                    }
                  />

                  <TimeLine isTrack={isTrack} />
                </>
              ) : null
            ) : bottomSheetPage === 3 ? (
              bottomSheetIndex === 0 ? (
                <DestinationHeader />
              ) : (
                <DrivingDestinations />
              )
            ) : null}
          </BottomSheetView>
        </BottomSheetModal>
      </>
    );
  } else {
    return (
      <View style={common.flexCenter}>
        <Text style={common.regularMedium}>
          Maps are only available on Android and iOS
        </Text>
      </View>
    );
  }
}
