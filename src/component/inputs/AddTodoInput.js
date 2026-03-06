import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import styles from "./styles";
export const AddTodoInput = ({ onAdd }) => {
  const [todo, setTodo] = useState("");

  const handlePress = () => {
    onAdd(todo);      
    setTodo("");      
  };

  return (
    <View style={styles.containerInout}>
      <TextInput
        placeholder="Add a To-Do"
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
      />
      <TouchableOpacity onPress={handlePress} style={styles.containerButton}>
        <Text style={styles.addButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};