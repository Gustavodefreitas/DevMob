import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Favorito from './pages/favorito';
import Inicial from './pages/inicial';
import Perfil from './pages/perfil';


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator initialRouteName='Inicial'>
            <Tab.Screen name="Favorito" component={Favorito}/>

            <Tab.Screen name="Inicial" component={Inicial}/>

            <Tab.Screen name="Perfil" component={Perfil}/>
        </Tab.Navigator>
    );
}
