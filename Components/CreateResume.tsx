/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import Animated from 'react-native-reanimated'

export default function CreateResume() {
  const { navigate, goBack } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name='chevron-back' size={26} color="black" />
      </TouchableOpacity>
      <View style={{justifyContent:'center',flex:1}}>
        
      <View style={[styles.opacity,{paddingVertical:10,borderRadius:20,width:'100%',alignItems:'center',backgroundColor:'#db7c7ce6'}]}>
        <Text style={{ marginTop: 15, fontSize: 18, color: '#f8f8f8' }}>Personal Details:</Text>
        <View style={{ marginTop: 50, }}>
          <View style={{marginVertical:10,}}>
            <Text style={{ marginVertical: 5,color:'white' }}>Full name:</Text>
            <TextInput
              placeholder='Enter name'
              maxLength={40}
              placeholderTextColor='white'
              style={styles.Input}
              />
          </View>

          <View style={{marginVertical:10}}>
            <Text style={{ marginVertical: 5,color:'white' }}>Email:</Text>
            <TextInput
              placeholder='Email'
              placeholderTextColor='white'
              maxLength={40}
              style={styles.Input}
              />
          </View>

          <View style={{marginVertical:10}}>
            <Text style={{ marginVertical: 5,color:'white' }}>Address:</Text>
            <TextInput
              placeholder='Address'
              placeholderTextColor='white'
              style={styles.Input}
              maxLength={40}
              />
          </View>

          <View style={{marginVertical:10}}>
            <Text style={{ marginVertical: 5,color:'white' }}>Phone:</Text>
            <TextInput
              placeholder='+ 91'
              placeholderTextColor='white'
              maxLength={10}
              style={[styles.Input,{marginBottom:20}]}
              />
          </View>
          <TouchableOpacity style={{backgroundColor:'#7676f0',paddingVertical:10,borderRadius:6,width:'80%',marginBottom:10}} onPress={()=>navigate('Education')}>
            <Text style={{textAlign:'center',color:'white',fontSize:18,fontWeight:'600'}}>Next</Text>
          </TouchableOpacity>
        </View>
              </View>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  Input: {
    borderWidth: 1,
    borderRadius: 7,
    fontSize: 16,
    paddingLeft: 10,
    maxWidth: '99%',
    color:'white',
    borderColor:'white'
  },
  opacity:{
    shadowColor:'gray'
  }
})

