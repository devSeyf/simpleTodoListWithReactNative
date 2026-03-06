import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Header from "./src/component/common/Header/Header.js";
import { AddTodoInput } from "./src/component/inputs/AddTodoInput.js";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodoHandler = (text) => {
    if (text.trim() === "") {
      return;
    }
    setTodos([
      ...todos,
      { id: Date.now().toString(), text: text.trim(), checked: false },
    ]);
  };

  // Toggle checked/unchecked
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)),
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddTodoInput onAdd={addTodoHandler} />

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

      {todos.map((t) => {
        let bgColor;
        if (t.checked) {
          bgColor = "#fff";
        } else {
          bgColor = "transparent";
        }

        let textStyle;
        if (t.checked) {
          textStyle = [styles.todoText, styles.todoDone];
        } else {
          textStyle = [styles.todoText];
        }

        return (
          <View key={t.id} style={styles.todoRow}>
            <Pressable
              onPress={() => toggleTodoHandler(t.id)}
              style={[styles.checkbox, { backgroundColor: bgColor }]}
            />
            <Text style={textStyle}>{t.text}</Text>
             
          </View>
        );
      })}

      




      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  containerTodos: {
    flexDirection: "row",
    justifyContent: "center",
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
    marginHorizontal: 27,
  },
  todosText: { color: "#fff", fontSize: 20 },
  todoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 12,
  },
  checkbox: { width: 22, height: 22, borderWidth: 2, borderColor: "#fff" },
  todoText: { color: "#fff", marginLeft: 10, fontSize: 20 },
  todoDone: { textDecorationLine: "line-through", opacity: 0.6 },
});
