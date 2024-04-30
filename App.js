import { Text, View, StyleSheet} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>INDMO</Text>
      <Text>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  paragraph: {
    fontSize: 30,
    color: "yellow",
  }
});
