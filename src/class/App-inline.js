import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AppInline() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "blue",
    fontSize: 70,
    fontWeight: "bold"
    }
});
