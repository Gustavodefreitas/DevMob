import React from 'react';
import { StyleSheet, Text, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import ListItem from '../../components/ListItem';
import { tatto, favTattoo } from '../../services/tattoo';
import { useNavigation } from '@react-navigation/native';



export default function Inicial() {
  const [tt, setTt] = useState(tatto) //variavel de estado, que recebe o service Tattoo
  const navigation = useNavigation();


  function onCheckboxChanged(index1) { //executa essa função sempre que clica no coração
    const newTt = [...tt];
    newTt[index1].fav = !newTt[index1].fav;
    setTt(newTt);
  }

  function buscaNoBanco() { //função para buscar em um banco futuro
    //Faz o get: bancoMongo.com/buscaTattoo => Array[]
    // setTt(Array[])
  }


  const onHandleClick = (item, index) => {
    onCheckboxChanged(index);
    navigation.navigate('Favorito', { item })
  }
  const exibeLista = ({ item, index }) => {
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
          <TouchableOpacity onPress={() => onHandleClick(item, index)} style={styles.coracao}>
            {item.fav ? <AntDesign name="heart" size={24} color="red" /> : <AntDesign name="heart" size={24} color="black" />}
          </TouchableOpacity>
        </View>

      </View>

    )
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={tt}
        renderItem={exibeLista}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#d8d8d8',
  },
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
    width: '95%',
    marginLeft: '2.5%',
    height: 120,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
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
  nametext: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  coracao: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  des: {
    marginLeft: 10,
    marginTop: 5,

  },
  img: {
    width: 80,
    height: 80,
  }
});
