import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import favorito from './pages/favorito';
import inical from './pages/inicial';
import perfil from './pages/perfil';


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator initialRouteName='inicial'>
            <Tab.Screen name="favorito" component={favorito}/>

            <Tab.Screen name="incial" component={inical}/>

            <Tab.Screen name="perfil" component={perfil}/>
        </Tab.Navigator>
    );
}
