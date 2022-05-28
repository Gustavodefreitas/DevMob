import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Favorito({ route }) {
  const [favTt, setFavTt] = useState([]) //variavel de estado que cria um novo array para favoritos
  const info = route.params.item;

  useEffect(() => { //Hook que executa sempre que a tela abre
    addOnFavs(info)
  }, [info])


  function addOnFavs(info) { //adiciona ao array favoritos
    if (info.fav == false) {
      const index = favTt.indexOf(info)
      favTt.splice(index, 1)
      info = null

    } else {
      favTt.push(info)
      info = null
    }
  }

  const renderFav = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.des}</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={favTt}
      renderItem={renderFav}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#d8d8d8'
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
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});
