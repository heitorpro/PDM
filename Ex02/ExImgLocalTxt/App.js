import { StatusBar } from 'expo-status-bar';
import { Image,StyleSheet, Text, View } from 'react-native';
import Nike from './assets/nike.png';
import Adidas from './assets/adidas.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={ Nike }
        style={styles.image}
      />
      <Text style={styles.text}>Nike</Text>

      
      <Image
        source={ Adidas }
        style={styles.image}
      />
      <Text style={styles.text}>Adidas
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    borderRadius: 10,
    borderColor: 'darkred',
  },

  
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 50,
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
