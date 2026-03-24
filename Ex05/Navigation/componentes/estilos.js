import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight: '700',
    backgroundColor: 'lightblue',
  },
  titulo: {
    color:'white',
    fontSize: 40,
    marginBottom: 20
  },
  texto: {
    textAlign: "center",
    color:'white',
    fontSize: 30,
  }
});

export default estilo;