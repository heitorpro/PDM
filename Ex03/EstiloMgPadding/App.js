import { StatusBar } from 'expo-status-bar';
import { Image,StyleSheet, Text, View } from 'react-native';
import Neymar from './assets/Neymar.jpg';
import Cr7 from './assets/Cr7.jpg';
import Messi from './assets/Messi.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
       
        <Text style={styles.text}>Jogador do Santos, Brasileiro</Text>
        <Text style={styles.textPl}>-- Neymar Jr</Text>
        <Image source={Neymar}style={styles.picture}/>

      </View>

      <View style={styles.box}>

        <Text style={styles.text}>Jogador do Al Nassr, Português</Text>
        <Text style={styles.textPl}>-- Cristiano Ronaldo</Text>
        <Image source={Cr7}style={styles.picture}/>

      </View>

      <View style={styles.box}>

        <Text style={styles.text}>Jogador do Inter de Miami, Argentino</Text>
        <Text style={styles.textPl}>-- Lionel Messi</Text>
        <Image source={Messi}style={styles.picture}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'gray',
    padding: 20,
    width: '80%',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 3,
    marginBottom: 40,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginBottom: 5,
  },
  textPl: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
