import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.letters}>Bem-Vindo</Text>
      <Text style={styles.letters}>Developed by Albert Heitor</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  letters: {
    color: 'red',
    fontSize: 30,
    fontWeight: 500,
    fontStyle: 'italic',
  },
  
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
