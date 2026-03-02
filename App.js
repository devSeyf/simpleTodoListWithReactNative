import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { useState } from "react";
export default function App() {
  const [todo, setTodo] = useState(
    { id: "1", text: "Buy milk",checked: false  },
    { id: "2", text: "Study React Native", checked: true  },
  );

  const [checked, setChecked] = useState(false);

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

      <View style={styles.containerTodos}>
        <TouchableOpacity style={styles.todosbuuton}>
          <Text style={styles.todosText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.todosbuuton}>
          <Text style={styles.todosText}>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.todosbuuton}>
          <Text style={styles.todosText}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => setChecked(!checked)}
          accessibilityRole="checkbox"
          accessibilityState={{ checked }}
          style={{
            width: 22,
            height: 22,
            marginLeft: 20,
            borderWidth: 2,
            borderColor: "#fff",
            backgroundColor: checked ? "#fff" : "transparent",
          }}
        />

        <Text style={{ color: "#fff", marginLeft: 10, fontSize: 20 }}>
          task one
        </Text>
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

  containerTodos: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
  },

  todosbuuton: {
    backgroundColor: "#ea8912",
    width: 80,
    height: 40,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    marginHorizontal: 27,
  },

  todosText: {
    color: "#fff",
    fontSize: 20,
  },
});
