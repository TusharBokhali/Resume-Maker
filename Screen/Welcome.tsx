import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

export default function Welcome() {
  return (
    <View style={styles.container}>
        <View style={styles.FirstWhite}>
        <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // Makes StatusBar transparent
      />
        </View>
      <Text style={{fontSize:30,color:'black'}}>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#7474bb'
    },
    FirstWhite:{
        width:'100%',
        height:'80%',
        backgroundColor:'white',
        borderBottomLeftRadius:70,
        borderBottomRightRadius:70,
    }
});