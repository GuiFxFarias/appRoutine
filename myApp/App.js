import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Conteudo</Text>
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
  },
});
