import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { ImageBackground, View, Text, Image, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native'

const BMI = () => {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
    const [bmiMessage, setBmiMessage] = useState('');

    const calculate = () => {

        if (!weight || !height) {
            setBmiMessage("⚠️ Please fill all fields correctly");
            setBmiResult(null);
            return;
        }

        if (height && weight){
            const heightInMeter = height / 100; // cm to meter 
            const bmi = weight / (heightInMeter * heightInMeter);
            setBmiResult("Your BMI : "+bmi.toFixed(2));

            if (bmi < 18.5) setBmiMessage('Underweight');
            else if (bmi >= 18.5 && bmi < 24.9) setBmiMessage('Normal Weight');
            else if (bmi >= 24.9 && bmi < 29.9) setBmiMessage('Overweight');
            else setBmiMessage('Obese');
        }
    }

  return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/bgimg1.png')}
            resizeMode='cover'
            style={styles.bgimg}
          >
            <View style={styles.logocontainer}>
              <Text style={styles.title}>BMI</Text>
              <Text style={styles.title1}>Calculator</Text>
              <Image source={require('../assets/bmipagelogo.png')} style={styles.logo}/>
              
              <View style={styles.form}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                  <Text style={styles.title1}>BODY MASS INDEX</Text>
                </View>

                <Text style={styles.inputtxt}>Weight :</Text>
                <TextInput 
                  placeholder='enter your weight in KG' 
                  style={styles.inputbox} 
                  keyboardType="numeric"
                  value={weight}
                  onChangeText={text => setWeight(text)}
                />

                <Text style={styles.inputtxt}>Height :</Text>
                <TextInput 
                  placeholder='enter your height in CM' 
                  style={styles.inputbox} 
                  keyboardType="numeric"
                  value={height}
                  onChangeText={text => setHeight(text)}
                />
              </View>
              
              <TouchableOpacity style={styles.btn} onPress={calculate}>
                <Text style={styles.btntxt}>Calculate</Text>
              </TouchableOpacity>
              
              <View style={styles.output}>
                <Text style={styles.msg}>{bmiResult}</Text>
                <Text style={styles.msg}>{bmiMessage}</Text>
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
        height: 100,
        width: 80,
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

export default BMI