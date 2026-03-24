import React from 'react';
import { View, Image, Text } from 'react-native';

import Ney from '../../assets/Neymar.jpg';
import estilos from './estilos';

export default function Card() {
  return (
    <View style={ estilos.container }>
      <View style={ estilos.box }>
        <Image source={ Ney } style={ estilos.fotoCapa } />
        <Text style={ estilos.nome }>Neymar Jr</Text>
        <Text style={ estilos.paragrafo }>Jogador do Santos em 2026</Text>
      </View>
    </View>
  );
}