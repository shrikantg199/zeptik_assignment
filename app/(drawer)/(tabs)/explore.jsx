import {
  StyleSheet,
  Text,
  TextInput,
  TextInputBase,
  View,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import Products from "../../../components/Explore/Products";
import Header from "../../../components/Explore/Header";

const Explore = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Header />

      <Text style={{ fontSize: 28, fontWeight: 800, textAlign: "center" }}>
        Find Products
      </Text>
      <Products />
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
