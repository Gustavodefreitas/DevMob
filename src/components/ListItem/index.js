import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { trocaFav } from "../../services/tattoo";



export default function ListItem({name,des,fav,id}){
    return(
        <View style={styles.container}>
            <Text style={styles.nametext}>
                {name}               
            </Text>

            <Text>
            {des}
            </Text>
            <TouchableOpacity onPress={()=>trocaFav(id)}>
                {fav ? <AntDesign name="heart" size={24} color="black" />: <AntDesign name="hearto" size={24} color="black" />}
            </TouchableOpacity>
            
        </View>
    )
        
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:'red',
      marginBottom:10,
      width:'95%',
      height:150,
      
      
    },
    nametext:{
      fontSize:25,
      fontWeight:'bold',
    }
  });
  