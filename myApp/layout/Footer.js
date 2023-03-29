import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Link } from "react-router-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <Link to={"/"}>
          <FontAwesome5 name="tasks" size={24} color="black" />
        </Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link to={"/routine"}>
          <MaterialCommunityIcons
            name="calendar-clock"
            size={26}
            color="black"
          />
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    height: "6%",
    backgroundColor: "#8061B8",
  },
  button1: {
    paddingBottom: 5,
  },
});
