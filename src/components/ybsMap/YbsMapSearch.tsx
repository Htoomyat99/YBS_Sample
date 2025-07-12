/* eslint-disable react-hooks/exhaustive-deps */
import { SuggestedPlace } from "@/src/common/dummy/DummyData";
import { SuggestedPlaceType } from "@/src/common/dummy/dummyType";
import { isIos } from "@/src/common/utils/detectPlatform";
import common from "@/src/constants/common";
import { useThemeColors } from "@/src/hooks/useThemeColors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { debounce } from "lodash";
import React, { useCallback, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const YbsMapSearch = ({ bottomSheetOpen }: { bottomSheetOpen: () => void }) => {
  const { top } = useSafeAreaInsets();
  const colors = useThemeColors();
  const { dismiss } = useBottomSheetModal();

  const [focusedInput, setFocusedInput] = useState<"from" | "to" | null>(null);
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [loading, setLoading] = useState(false);

  // Refs for input containers
  const fromInputRef = useRef<View>(null);
  const toInputRef = useRef<View>(null);
  // Ref for dropdown position
  const dropdownPositionRef = useRef({ top: 0, left: 0, width: 0 });

  const openSartPointDropdown =
    focusedInput === "from" && startPoint.length > 0;
  const openEndPointDropdown = focusedInput === "to" && endPoint.length > 0;

  // Handlers to measure and set dropdown position
  const handleDebouncedInput = useCallback(
    debounce((input: "from" | "to") => {
      const ref = input === "from" ? fromInputRef : toInputRef;
      ref.current?.measureInWindow((x, y, width, height) => {
        dropdownPositionRef.current = {
          top: y - 5 + 2 * height,
          left: x,
          width,
        };
        setLoading(true);
      });
    }, 500),
    []
  );

  const handlePressSuggestedPlace = (name: string) => {
    Keyboard.dismiss();
    setFocusedInput(null);

    if (focusedInput === "from") {
      setStartPoint(name);
      if (endPoint.length > 0) {
        bottomSheetOpen();
      }
    }

    if (focusedInput === "to") {
      setEndPoint(name);
      if (startPoint.length > 0) {
        bottomSheetOpen();
      }
    }
  };

  const renderDropdownItem = ({ item }: { item: SuggestedPlaceType }) => {
    return (
      <Pressable
        onPress={() => handlePressSuggestedPlace(item.name)}
        style={[
          styles.dropdownItemContainer,
          {
            borderBottomWidth: item.id === 1 ? StyleSheet.hairlineWidth : 0,
            borderBottomColor: colors.divider,
            backgroundColor: item.id === 1 ? "#EEEEEEEE" : "transparent",
          },
        ]}
      >
        <Image source={item.image} style={styles.image} resizeMode="cover" />

        <Text numberOfLines={1} style={[common.regularLarge, { width: "75%" }]}>
          {item.name}
        </Text>

        <FontAwesome name="caret-right" size={20} color={colors.text} />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: top }}>
        <View
          ref={fromInputRef}
          style={[
            styles.inputContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <Ionicons name="location-outline" size={24} color={colors.blue} />

          <TextInput
            placeholder="Choose starting point"
            style={{ flex: 1, ...common.regularLarge }}
            placeholderTextColor={colors.placeholderText}
            value={startPoint}
            onChangeText={(text) => {
              setStartPoint(text);
              setFocusedInput("from");
              setLoading(false);
              handleDebouncedInput("from");
            }}
            onEndEditing={() => {
              if (startPoint.length > 0 && endPoint.length > 0) {
                bottomSheetOpen();
              } else {
                dismiss();
              }
            }}
          />
        </View>

        <View
          ref={toInputRef}
          style={[
            styles.inputContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <Ionicons name="location-outline" size={24} color={colors.red} />

          <TextInput
            placeholder="Choose destination"
            style={{ flex: 1, ...common.regularLarge }}
            placeholderTextColor={colors.placeholderText}
            value={endPoint}
            onChangeText={(text) => {
              setEndPoint(text);
              setFocusedInput("to");
              setLoading(false);
              handleDebouncedInput("to");
            }}
            onEndEditing={() => {
              if (startPoint.length > 0 && endPoint.length > 0) {
                bottomSheetOpen();
              } else {
                dismiss();
              }
            }}
          />
        </View>
      </View>

      {/* Dropdown */}
      {(openSartPointDropdown || openEndPointDropdown) && loading && (
        <View
          style={[
            styles.dropdownContainer,
            {
              top: dropdownPositionRef.current.top,
              left: dropdownPositionRef.current.left,
              width: dropdownPositionRef.current.width,
              backgroundColor: colors.background,
              shadowColor: colors.text,
            },
          ]}
        >
          <FlatList
            data={SuggestedPlace}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={renderDropdownItem}
            keyboardShouldPersistTaps="handled"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default YbsMapSearch;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderRadius: 30,
    paddingVertical: isIos ? 7 : 4,
    marginTop: 10,
  },
  dropdownContainer: {
    position: "absolute",
    zIndex: 100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
  },
  dropdownItemContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});
