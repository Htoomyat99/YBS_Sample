import TabBarIcon from "@/src/components/TabBarIcon";
import common from "@/src/constants/common";
import { local } from "@/src/constants/local";
import { Colors } from "@/src/constants/variables";
import { HapticTab } from "@components/HapticTab";
import TabBarBackground from "@components/ui/TabBarBackground";
import Feather from "@expo/vector-icons/Feather";
import { useColorScheme } from "@hooks/useColorScheme";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Platform, Pressable, StyleSheet } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].text,
        tabBarLabelStyle: common.semiBoldSmall,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            backgroundColor: Colors[colorScheme ?? "light"].tabBarBackground,
          },
        }),
        headerLeft: () => (
          <Pressable
            style={styles.headerIconContainer}
            onPress={() => router.back()}
          >
            <Feather
              name="arrow-left"
              size={24}
              color={Colors[colorScheme ?? "light"].text}
            />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable style={[styles.headerIconContainer, { opacity: 0 }]}>
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>
        ),
        headerTitleAlign: "center",
        headerTitleStyle: common.semiBoldHeader,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: local.home,
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} name="house.fill" />
          ),
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: local.ybsGuide,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} name="book.fill" />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: local.notification,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} name="bell.fill" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerIconContainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleStyle: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
