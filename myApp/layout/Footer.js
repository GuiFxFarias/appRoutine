import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Link } from "react-router-native";

export default function Footer({ match }) {
  return (
    <View style={styles.container}>
      <Link to={"/tasks"}>
        <TouchableOpacity style={styles.button1}>
          <FontAwesome5 name="tasks" size={24} color="black" />
        </TouchableOpacity>
      </Link>
      <Link to={"/"}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="calendar-clock"
            size={26}
            color="black"
          />
        </TouchableOpacity>
      </Link>
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
