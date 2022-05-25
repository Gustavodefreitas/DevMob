import React from "react";
import { StyleSheet, Text,Image,View,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { trocaFav } from "../../services/tattoo";



export default function ListItem({name,des,fav,id,img}){
    return(
        <View style={styles.container}>
            
        <View>
          <Image source={{ uri: img }} style={styles.img} />
        </View>

        <View>

          <Text style={styles.nametext}>
            {name}
          </Text>
          <Text style={styles.des}>
            {des}
          </Text >
        </View>

            <TouchableOpacity onPress={()=>trocaFav(id)} style={styles.coracao}>
                {fav ? <AntDesign name="heart" size={24} color="black" />: <AntDesign name="heart" size={24} color="red" />}
            </TouchableOpacity>
            
        </View>
    )
        
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:'grey',
      marginBottom:10,
      width:'95%',
      height:150,
      marginLeft: 15,
      borderRadius: 28,

      
    },
    nametext:{
      marginLeft: 150,
      fontSize:25,
      fontWeight:'bold',
    },
    coracao:{
        marginLeft: 500,
        fontSize:25,
        fontWeight:'bold',
      },
    des:{
        marginLeft: 150,
        marginTop: 10,
        
    },
    img:{
      width:80,
      height:80,
    }
  });
  