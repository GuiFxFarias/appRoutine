import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { openDatabase } from "react-native-sqlite-storage";

export default function AddRoutine() {
  const [routine, setRoutine] = useState();
  const [task, setTask] = useState([]);

  function addRoutine() {
    if (!routine) {
      alert("Adicione algo");
      return false;
    }

    setTask([...task, routine]);
    setRoutine("");
  }

  function renderRoutine({ item }) {
    return (
      <View style={styles.list}>
        <Text>{item}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={routine}
        onChangeText={(text) => setRoutine(text)}
        placeholder="Adicionar Algo Na Rotina"
      />

      <TouchableOpacity style={styles.button} onPress={addRoutine}>
        <Text style={{ color: "white" }}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={task}
        keyExtractor={(item) => item}
        renderItem={renderRoutine}
      />
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
  input: {
    textAlign: "center",
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 10,
    width: 100,
    alignItems: "center",
  },
  list: {
    backgroundColor: "grey",
    padding: 20,
  },
});
