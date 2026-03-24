import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaHome from "./componentes/TelaHome.js";
import TelaDescricao from "./componentes/TelaDescricao";
import TelaRotas from "./componentes/TelaRotas";
import TelaBiblioteca from "./componentes/TelaBiblioteca";

const Abas = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator>
        <Abas.Screen name="Home" component = { TelaHome }/>
        <Abas.Screen name="Telas" component = { TelaDescricao } />
        <Abas.Screen name="Rotas" component = { TelaRotas } />
        <Abas.Screen name="Biblioteca" component = { TelaBiblioteca } />
      </Abas.Navigator>
    </NavigationContainer>
  );
};