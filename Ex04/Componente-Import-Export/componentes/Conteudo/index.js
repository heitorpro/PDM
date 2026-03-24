import React from 'react';
import { Image, Text, View } from 'react-native';

import Ney from '../../assets/NeySantos.jpg';
import estilos from './estilos';

export default function Conteudo() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Sobre o Jogador</Text>

      <Text style={ estilos.subtitulo }>Sua vida</Text>
      <Text style={ estilos.paragrafo }>Nascido em Mogi das Cruzes, São Paulo, em 5 de fevereiro de 1992.</Text>
      <Text style={ estilos.paragrafo }>
        Revelado pelo Santos, tornou-se um dos maiores nomes do futebol mundial, atuando por clubes como Barcelona, PSG e Al-Hilal.
      </Text>

      <Text style={ estilos.subtitulo }>Início da carreira</Text>
      <Text style={ estilos.paragrafo }>
        Sua estreia profissional ocorreu em 2009, pelo Santos, onde rapidamente conquistou títulos importantes como a Libertadores.
      </Text>
      
      <Image source={ Ney } style={ estilos.imagem } />
    </View>
  );
}