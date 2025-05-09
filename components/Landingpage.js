import React from 'react'
import { ImageBackground, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const Landingpage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ImageBackground
        source={require('../assets/bgimg.png')}
        resizeMode='cover'
        style={styles.bgimg}
        >
        <View style={styles.logocontainer}>
            <Text style={styles.title}>Fit-Mate</Text>
            <Image source={require('../assets/logobmi.png')} style={styles.logo}/>
        </View>

        <View style={styles.btncontainer}>
        <Text style={styles.slogan}>'Track it to change it."</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BMI')}>
                <Text style={styles.btntxt}>
                    BMI Calculator
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BMR')}>
                <Text style={styles.btntxt}>
                    BMR Calculator
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Idealweight')}>
                <Text style={styles.btntxt}>
                    Ideal Weight Calculator
                </Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgimg: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    logocontainer: {
        marginTop: 110,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 50,
        color: "#3c7962",
    },
    logo: {
        height: 250,
        width: 250,
    },
    btncontainer: {
        paddingTop: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    slogan: {
        fontSize: 18,
        paddingBottom: 40,
        fontStyle: "italic",
        color: "#0d522c"
    },
    btn: {
        borderColor: "#3c7962",
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: "#3c7962",
        padding: 15,
        margin: 10,
    },
    btntxt: {
        color: "white",
        fontSize: 17,
    }

})

export default Landingpage