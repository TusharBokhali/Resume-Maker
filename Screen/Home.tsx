/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, useWindowDimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
export default function Home() {
  const [users,setusers] = useState()
  const {navigate} = useNavigation();
  useEffect(()=>{
    const fetch = async() =>{
      let dub = await AsyncStorage.getItem('user');
      let data  = JSON.parse(dub || '');
      setusers(data);
    };
    fetch();
  },[]);

  const {width} = useWindowDimensions();

  const slider = [
    require('../assets/image/Images1.png'),
    require('../assets/image/images2.png'),
  ];

  const PolularResume = [
    require('../assets/image/Cv1.png'),
    // require('../assets/image/Cv2.png'),
    require('../assets/image/Cv3.png'),
    require('../assets/image/Cv4.png'),
    require('../assets/image/Cv5.png'),
    require('../assets/image/Cv6.png'),
    require('../assets/image/Cv7.png'),
    require('../assets/image/Cv8.png'),
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.Profile}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', }}>
          <TouchableOpacity>
            {
              users ? (
                <Text style={[styles.ProfileImage,{textAlign:'center',lineHeight:50,fontSize:20,color:'white'}]}>{users.email[0].toUpperCase()}</Text>
              ) : (
                <Image style={styles.ProfileImage}/>
              )
            }
          </TouchableOpacity>
          <View>
            <Text style={{ fontWeight: '600', fontSize: 16 }}>Welcome</Text>
            <Text>{users ? ('Users') :('Resume')}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="notifications-outline" size={22} />
        </TouchableOpacity>
      </View>
        <View style={{marginTop:20}}>
          <FlatList 
          data={slider} 
          renderItem={({item,index})=>(
            <TouchableOpacity style={{marginHorizontal:5}}>
                <Image source={item} style={{ width: width-60, height: 200,borderRadius:10}}/>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{width:width/2 -30,height:210,marginTop:20,borderRadius:20,backgroundColor:'#F3CC5C'}} onPress={()=>navigate('CreateResume')}>
            <Image source={require('../assets/image/createresume.png')} style={{width: 130,height:130}}/>
            <Text style={{paddingHorizontal:10,fontWeight:'600',fontSize:18}}>Create Resume</Text>
            <Text style={{paddingHorizontal:10,color:'#97825B'}}>Build your resume from scratch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width:width/2 -30,height:210,marginTop:20,borderRadius:20,backgroundColor:'#7AC391'}}>
            <Image source={require('../assets/image/yourresume.png')} style={{width: 130,height:130}}/>
            <Text style={{paddingHorizontal:10,fontWeight:'600',fontSize:18}}>Your Resume</Text>
            <Text style={{paddingHorizontal:10,color:'#97825B'}}>A glimps at how your resume looks.</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:width - 40,height:200,marginTop:10,borderRadius:20,backgroundColor:'#C6E1F0',padding:10,flexDirection:'row',alignItems:'center'}}>
          <View style={{width:width/2-10,paddingHorizontal:10,}}>
            <Text style={{fontSize:18,fontWeight:'600',letterSpacing:0.6,}}>Choose Template</Text>
            <Text style={{color:'#8B99AE',marginTop:5}}>Choose from 100s professional templates.</Text>

            <TouchableOpacity style={{backgroundColor:'#473D58',width:100,marginTop:20,padding:5,borderRadius:8}}>
              <Text style={{textAlign:'center',fontSize:18,color:'white',fontWeight:'500'}}>Read more</Text>
            </TouchableOpacity>
          </View>
          <View style={{width:'50%',paddingRight:15}}>
            <Image source={require('../assets/image/Templates.png')} style={{width:'100%',height:'70%',}}/>
          </View>
        </View>
        <Text style={{marginTop:10,fontSize:18,fontWeight:'600'}}>Popular Resumes</Text>
        <View style={{marginTop:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',gap:10}}>
          {
            PolularResume.map((el,inx)=>{
              return (
                <TouchableOpacity key={inx}>
                <Image source={el} style={{width:width/2 - 25,height:250,borderRadius:20}}/>
              </TouchableOpacity>
              )
            })
          }
       
        </View>
</ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent:'space-between'
  },
  ProfileImage: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 50
  }
})