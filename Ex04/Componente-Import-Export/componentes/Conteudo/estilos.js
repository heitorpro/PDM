import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
    },
    subtitulo: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    paragrafo: {
        marginTop: 6,
    },
    imagem: {
        width: 250,
        height: 250,
        marginTop: 10,
    }
});

export default estilos;