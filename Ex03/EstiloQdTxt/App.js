import { StatusBar } from 'expo-status-bar';
import { Image,StyleSheet, Text, View } from 'react-native';
import Dog from './assets/doberman.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Doberman</Text>
      <Text style={styles.descricao}>O Doberman é uma raça de cães de médio a grande porte, originária da Alemanha no final do século XIX</Text>

      <Image
        source={Dog}
        style={styles.picture}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descricao: {
    color: 'white',
    width: 350,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  picture: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: 'white',
    borderWidth: 4,
  },  
});
