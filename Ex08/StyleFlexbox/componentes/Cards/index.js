import React from 'react';
import { Image, Text, View } from 'react-native';

import convidado from '../../assets/Silvio Santos.jpg';
import carne from '../../assets/Picanha.jpg';
import refrigerante from '../../assets/Pepsi.png';
import cerveja from '../../assets/Heineken.jpg';

import estilo from './estilos';

export default function Cards () {
  return (
    <View style = { estilo.boxDados }>
      {/* Card Convidados */}
      <View style = { estilo.boxCard } >
        <Image style = { estilo.boxCardIcone } source = { convidado }/>
        <Text style = { estilo.boxCardTexto }>
          Convidados
        </Text>
        <Text style = { estilo.boxCardValor }>
          1
        </Text>
      </View>

      {/* Card Carne */}
      <View style = { estilo.boxCard } >
        <Image style = { estilo.boxCardIcone } source = { carne }/>
        <Text style = { estilo.boxCardTexto }>
          Carne
        </Text>
        <Text style = { estilo.boxCardValor }>
          400 GR
        </Text>
      </View>

      {/* Card Refrigerante */}
      <View style = { estilo.boxCard } >
        <Image style = { estilo.boxCardIcone } source = { refrigerante }/>
        <Text style = { estilo.boxCardTexto }>
          Refrigerante
        </Text>
        <Text style = { estilo.boxCardValor }>
          700 ML
        </Text>
      </View>

      {/* Card Cerveja */}
      <View style = { estilo.boxCard } >
        <Image style = { estilo.boxCardIcone } source = { cerveja }/>
        <Text style = { estilo.boxCardTexto }>
          Cerveja
        </Text>
        <Text style = { estilo.boxCardValor }>
          4 Latas
        </Text>
      </View>
    </View>
  );
};