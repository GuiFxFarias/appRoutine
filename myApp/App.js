import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { NativeRouter, Route, Link, Routes } from "react-router-native";

import Footer from "./layout/Footer";
import AddRoutine from "./pages/AddRoutine";
import Tasks from "./pages/Tasks";
import Header from "./layout/Header";

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
      <NativeRouter>
        <Header />
        <View style={styles.content}>
          <Routes>
            <Route path="/" element={<AddRoutine />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
          </Routes>
        </View>
        <Footer />
      </NativeRouter>
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
    width: "100%",
    height: "85%",
    alignItems: "center",
  },
});
