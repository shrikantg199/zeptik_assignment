import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const favorites = () => {
  return (
   <View
   style={{
     backgroundColor: "white",
     width: "100%",
     height: "100%",
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
   }}
 >
   <Text style={{fontSize:40,color:"gray"}}>favorites</Text>
 </View>
  )
}

export default favorites

const styles = StyleSheet.create({})