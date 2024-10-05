import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 800 }}>Vsell</Text>
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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
