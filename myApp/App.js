import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Button } from "react-native";
import Footer from "./layout/Footer";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Header from "./layout/Header";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function plus() {
    setCount(count + 1);
  }

  function less() {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AntDesign name="pluscircle" size={24} color="black" onPress={plus} />
        <MaterialIcons
          name="do-not-disturb-on"
          size={28}
          color="black"
          onPress={less}
        />
        <Text>{count}</Text>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    height: "85%",
    alignItems: "center",
  },
});
