import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Favorito({route}) {
  // const [favorites, setFavorites] = useState([])

  const info = route.params.item;
  console.log(info)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{info.name}</Text>
      <Text style={styles.text}>{info.des}</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:25,
    fontWeight:'bold',
  }
});
