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

const Explore = () => {
  const navigation = useNavigation();
  const products = [
    {
      id: 1,
      title: "Fresh Fruits & Vegetable",
      imageUrl: require("../../../assets/products/fruits.png"),
      backgroundColor: "#eef7f1",
    },
    {
      id: 2,
      title: "Cooking Oil & Ghee",
      imageUrl: require("../../../assets/products/oil.png"),
      backgroundColor: "#fef6ed",
    },
    {
      id: 3,
      title: "Meat & Fish",
      imageUrl: require("../../../assets/products/meat.png"),
      backgroundColor: "#fde8e4",
    },
    {
      id: 4,
      title: "Bakery & Snacks",
      imageUrl: require("../../../assets/products/bakery.png"),
      backgroundColor: "#f4ebf7",
    },
    {
      id: 5,
      title: "Dairy & Eggs",
      imageUrl: require("../../../assets/products/diary.png"),
      backgroundColor: "#fef8e5",
    },
    {
      id: 6,
      title: "Beverages",
      imageUrl: require("../../../assets/products/Beverages.png"),
      backgroundColor: "#edf7fc",
    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{fontSize:18,fontWeight:800}}>Vsell</Text>
        <Entypo
          name="menu"
          size={30}
          color="black"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>

      <View
        style={{
          borderColor: "gray",

          marginHorizontal: 20,
          borderRadius: 10,
          paddingVertical: 8,
          backgroundColor: "#f2f3f2",
          paddingHorizontal: 14,
          marginVertical: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
          }}
        >
          <FontAwesome name="search" size={18} color="gray" />
          <TextInput
            placeholderTextColor="gray"
            placeholder="Search Store"
            style={{}}
          />
        </View>
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 28, fontWeight: 800, textAlign: "center" }}>
          Find Products
        </Text>
      </View>

      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              width: "44%",
              marginHorizontal: 10,
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderColor: "gray",
              paddingVertical: 30,
              backgroundColor: item.backgroundColor,
              borderColor: item.backgroundColor,
            }}
          >
            <Image
              source={item.imageUrl}
              style={{ width: 120, height: 100 }}
              resizeMode="cover"
            />
            <Text style={{ fontSize: 18, fontWeight: 700 }}>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
