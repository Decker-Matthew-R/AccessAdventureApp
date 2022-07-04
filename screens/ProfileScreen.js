import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {

    return (

        <KeyboardAvoidingView
             style={styles.container} 
             behavior="padding"
             >    
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="First Name" 
                    // value={ } 
                    // onChangeText={ text => setEmail(text)} 
                    style={styles.input}
                >
                </TextInput>
                <TextInput 
                    placeholder="City" 
                    // value={ } 
                    // onChangeText={ text => setEmail(text)} 
                    style={styles.input}
                >
                </TextInput>
                <TextInput 
                    placeholder="State" 
                    // value={ } 
                    // onChangeText={ text => setEmail(text)} 
                    style={styles.input}
                >
                </TextInput>
                <TextInput 
                    placeholder="Last Name" 
                    // value={password} 
                    // onChangeText={ text => setPassword(text)} 
                    style={styles.input}                    
                >
                </TextInput>
                <TouchableOpacity                    
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add Picture</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    )

}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})