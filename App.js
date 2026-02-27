import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
export default function App() {
  const [todo, setTodo] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
        <Text style={styles.headerSimpleText}>Simple Todo List</Text>
      </View>
      <View style={styles.containerInout}>
        <TextInput
          placeholder="Add a To-Do"
          style={styles.input}
          value={todo}
          onChangeText={(t) => {
            setTodo(t);
          }}
        />
        <TouchableOpacity style={styles.containerButton}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  headerText: {
    color: "#ea8912",
    fontSize: 50,
    fontWeight: "bold",
  },

  headerSimpleText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
  },
  header: {
    marginTop: 50,
    marginBottom: 10,
    alignItems: "center",
  },

  input: {
    backgroundColor: "#fff",
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 20,
  },

  containerInout: {
    flexDirection: "row",
  },
  containerButton: {
    backgroundColor: "#ea8912",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  addButton: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
