import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Fresh Fruits & Vegetable",
      imageUrl: require("../../assets/products/fruits.png"),
      backgroundColor: "#eef7f1",
    },
    {
      id: 2,
      title: "Cooking Oil & Ghee",
      imageUrl: require("../../assets/products/oil.png"),
      backgroundColor: "#fef6ed",
    },
    {
      id: 3,
      title: "Meat & Fish",
      imageUrl: require("../../assets/products/meat.png"),
      backgroundColor: "#fde8e4",
    },
    {
      id: 4,
      title: "Bakery & Snacks",
      imageUrl: require("../../assets/products/bakery.png"),
      backgroundColor: "#f4ebf7",
    },
    {
      id: 5,
      title: "Dairy & Eggs",
      imageUrl: require("../../assets/products/diary.png"),
      backgroundColor: "#fef8e5",
    },
    {
      id: 6,
      title: "Beverages",
      imageUrl: require("../../assets/products/Beverages.png"),
      backgroundColor: "#edf7fc",
    },
  ];
  return (
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
  );
};

export default Products;

const styles = StyleSheet.create({});
