import React from 'react';
import { StyleSheet, Text, FlatList, Image, TouchableOpacity, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import ListItem from '../../components/ListItem';
import { tatto } from '../../services/tattoo';
import { useNavigation } from '@react-navigation/native';



export default function Inicial() {
  const [tt, setTt] = useState(tatto)
  const navigation = useNavigation();

  const onHandleClick = (item) => {
    navigation.navigate('Favorito', {item})
  }
  const exibeLista = ({item}) => {
    return (

      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image source={{ uri: item.img }} style={styles.img} />
        </View>

        <View style={styles.conteudo}>

          <Text style={styles.nametext}>
            {item.name}
          </Text>
          <Text style={styles.des}>
            {item.des}
          </Text >
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onHandleClick(item)} style={styles.coracao}>
            {item.fav ? <AntDesign name="heart" size={24} color="black" /> : <AntDesign name="heart" size={24} color="red" />}
          </TouchableOpacity>
        </View>

      </View>
  
    )
  }

  return (
    <>
      <FlatList
        data={tt}
        renderItem={exibeLista} 
      />
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'grey',
    marginBottom:10,
    width:'95%',
    height:150,
    marginLeft: 15,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imageContainer: {
    flex: 1,
    width: 80,
    height: 80,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudo: {
    justifyContent: 'center',
    flex: 2,
    padding: 10
  },
  buttonContainer: {
    flex: 0.5,
  },
  nametext:{
    marginLeft: 10,
    fontSize:25,
    fontWeight:'bold',
  },
  coracao:{
      marginLeft: 10,
      fontSize:25,
      fontWeight:'bold',
    },
  des:{
      marginLeft: 10,
      marginTop: 10,
      
  },
  img:{
    width:80,
    height:80,
  }
});
