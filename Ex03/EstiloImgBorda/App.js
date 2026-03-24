import { StatusBar } from 'expo-status-bar';
import { Image,StyleSheet, Text, View } from 'react-native';
import Foto from './assets/RickAndMorty.jpg';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Rick And Morty</Text>

      <Image
        source={Foto}
        style={styles.picture}
      />

      <Text style={styles.subtitulo}>Morty</Text>
      
      <StatusBar style="auto" />
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
  titulo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  picture: {
    width: 300,
    height: 300, 
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 15,
  },
  subtitulo: {
    color: 'white',
    fontSize: 30,
    marginTop: 30,
    fontStyle: 'italic',
  },

});
