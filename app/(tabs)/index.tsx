import { Button, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../../assets/images/logo.png';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.centerContiner}>
      <Text style={styles.title}>Traveler</Text>
      <Image source={logo} style={styles.image}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>

      <View style={styles.centerContiner}>
         <Button color={'green'} title='Login' onPress={()=> {console.log('This is a login button')}}/>
          <Button title='Signup' onPress={()=> {console.log('This is a signup button')}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  centerContiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    resizeMode: 'stretch'
  },
  button: {
    width: 100,
    backgroundColor: 'red',
  }


});

