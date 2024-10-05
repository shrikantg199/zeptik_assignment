import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{ headerShown: false, drawerPosition: "right" }}>
      <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
    </Drawer>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
