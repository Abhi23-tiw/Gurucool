import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainCom}>
                <Text style={styles.mainText}>This app is an assignment for the company: Gurucool</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tabs')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#010b14",
        paddingHorizontal: 20,
    },
    mainCom: {
        width: 350,
        height: 150,
        marginTop: 120,
        backgroundColor: "aqua",
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    mainText: {
        color: 'black',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '600'
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 28,
        marginTop: 230,
        width: 350,
        alignItems: 'center',
    },
    buttonText: {
        color: "black",
        fontSize: 22,
        fontWeight: "bold",
    },
});
