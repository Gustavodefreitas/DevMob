import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';
import ListItem from '../../components/ListItem';
import { tatto } from '../../services/tattoo';

export default function inicial() {
  return (
    <ScrollView style={styles.container}>
      {
        tatto.map(t=>(<ListItem key={t.id} name={t.name} fav={t.fav} id={t.id}>

        </ListItem>))
      }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    
   
  },
  text:{
    fontSize:25,
    fontWeight:'bold',
  }
});
