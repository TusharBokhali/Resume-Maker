/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

export default function Education() {
    const { navigate, goBack } = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => goBack()}>
                <Icon name="chevron-back" size={26} color="black" />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <View style={[styles.Box]}>
                    <Text style={{ marginVertical: 20, fontSize: 18, fontWeight: '600', color: 'white' }}>Education:</Text>
                    <View style={{width:'100%'}}>

                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ color: 'white' }}>Degree</Text>

                            <TextInput
                                placeholder="Degree"
                                placeholderTextColor="white"
                                style={styles.Input}
                            />
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ color: 'white' }}>University</Text>

                            <TextInput
                                placeholder="University"
                                placeholderTextColor="white"
                                style={styles.Input}
                            />
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ color: 'white' }}>Graduation Complete</Text>

                            <TextInput
                                placeholder="Date"
                                dataDetectorTypes={'calendarEvent'}
                                placeholderTextColor="white"
                                style={styles.Input}
                            />
                        </View>
                        <TouchableOpacity style={styles.BTN}>
                            <Text style={{textAlign:'center',fontSize:18,color:'white'}}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    Box: {
        width:'100%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#db7c7ce6',
        shadowColor: 'gray',
    },
    Input: {
        maxWidth: '89%',
        borderWidth: 1,
        borderColor: 'white',
        paddingLeft: 10,
        borderRadius: 10,
        color: 'white',
    },
    BTN:{
        backgroundColor:'#7676f0',
        paddingVertical:10,
        borderRadius:6,
        width:'80%',
        marginBottom:10,
        alignSelf:'center',
    },
});
