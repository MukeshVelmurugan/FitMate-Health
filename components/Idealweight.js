import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { ImageBackground, View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

const Idealweight = () => {

    const [height, setHeight] = useState('');
    const [gender,setGender] = useState('')
    const [idealResult, setIdealResult] = useState(null);
    const [idealMessage, setIdealMessage] = useState('');
    
    const calculate = () => {

        if (!gender || !height) {
            setIdealMessage("⚠️ Please fill all fields correctly");
            setIdealResult(null);
            return;
        }

        if (gender === 'male') {
            const ideal = 50 + (2.3 * ((height / 2.54) - 60))
            const result = ideal.toFixed(2);
            setIdealResult(result);
            setIdealMessage('Ideal Weight : ' + result + ' KG');
        } else {
            const ideal = 45.5 + (2.3 * ((height / 2.54) - 60))
            const result = ideal.toFixed(2);
            setIdealResult(result);
            setIdealMessage('Ideal Weight : ' + result + ' KG');
        }
    }


  return (
    <ScrollView
    contentContainerStyle={{flexGrow:1}}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="always"
    >
    <View style={styles.container}>
        <ImageBackground
        source={require('../assets/bgimg1.png')}
        resizeMode='cover'
        style={styles.bgimg}
        >
            <View style={styles.logocontainer}>
                <Text style={styles.title}>I-W</Text>
                <Text style={styles.title1}>Calculator</Text>
                <Image source={require('../assets/idealpagelogo.png')} style={styles.logo}/>
            <View style={styles.form}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.title1}>IDEAL WEIGHT</Text>
                </View>
                <Text style={styles.inputtxt}>Height :</Text>
                        <TextInput placeholder='enter your height in CM' 
                            style={styles.inputbox} 
                            keyboardType="numeric"
                            value={height}
                            onChangeText={text => setHeight(text)}
                        />
                <Text style={styles.inputtxt}>Gender :</Text>    
                <View style={styles.radiogrp}>

                    <View style={styles.radiobtn}>
                    <Text style={styles.inputtxt}>Male</Text>
                        <RadioButton
                            value='male'
                            status={gender === 'male' ? 'checked' : 'unchecked'}
                            onPress={() => setGender('male')}
                            color="#0d522c"
                        />
                    </View>

                    <View style={styles.radiobtn}>
                    <Text style={styles.inputtxt}>Female</Text>
                        <RadioButton
                            value='female'
                            status={gender === 'female' ? 'checked' : 'unchecked'}
                            onPress={() => setGender('female')}
                            color="#0d522c"
                        />
                    </View>
                    </View>
            </View>
                <TouchableOpacity style={styles.btn} onPress={calculate}>
                    <Text style={styles.btntxt}>
                        Calculate
                    </Text>
                </TouchableOpacity>
                <View style={styles.output}>
                    <Text style={styles.msg}>{idealMessage}</Text>
                </View>
            </View>

        </ImageBackground>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    bgimg: {
        flex:1,
        height: "100%",
        width: "100%",
    },
    logocontainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        marginTop: 55,
        fontSize: 40,
        color: "#3c7962",
        fontWeight: "bold"
    },
    title1: {
        fontSize: 20,
        color: "#3c7962",
        fontWeight: "bold"
    },
    logo: {
        height: 90,
        width: 160,
    },
    form: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 100,
        backgroundColor: "rgba(255, 255, 255, 0.63)",
        height: 310,
        width: 300,
        justifyContent: "space-evenly",
        borderColor: "#0d522c",
        borderWidth: 1,
        borderRadius: 20,
    },
    inputtxt: {
        color: "#0d522c",
        fontSize: 15,
        fontWeight: "bold"
    },
    inputbox: {
        borderWidth: 0.5,
        borderRadius: 6,
        paddingLeft: 10,
        borderColor: "#0d522c",
        backgroundColor:"white",
    },
    btn: {
        marginTop: 40,
        borderColor: "#3c7962",
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: "#3c7962",
    },
    btntxt: {
        fontSize: 18,
        padding: 8,
        paddingLeft: 60,
        paddingRight: 60,
        color: "white"
    },
    radiogrp: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    radiobtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  output: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    msg: {
        fontSize: 20,
        color: "#0d522c",
        paddingTop: 20,
    }


})

export default Idealweight