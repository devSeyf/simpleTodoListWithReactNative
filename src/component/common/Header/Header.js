import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import styles from "./styles";
 const Header = () => {
  return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
        <Text style={styles.headerSimpleText}>Simple Todo List</Text>
      </View>
  );
};


export default Header