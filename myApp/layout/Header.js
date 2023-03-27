import { Text, View, StyleSheet, StatusBar } from "react-native";

const statusHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 30;

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Rut App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusHeight,
    paddingBottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8061B8",
  },
  h1: {
    fontSize: 18,
  },
});
