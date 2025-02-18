import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to the App!</Text>
            <Text style={styles.subText}>
                Explore the features and enjoy a seamless experience.
            </Text>
            <View style={styles.heading}>
                <Text style={styles.developer}>Developed by: 😊</Text>
                <Text style={styles.developerName}>Abhishrestha Tiwari</Text>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#010b14',
        paddingHorizontal: 20,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: '#ccc',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: "Lato_700Bold",
        color: 'white',
    },
    version: {
        fontSize: 16,
        color: 'white',
    },
    developer: {
        fontSize: 18,
        color: 'white',
        fontFamily: "Lato_700Bold",
        marginTop: 10,
        marginBottom: 5,
    },
    developerName: {
        fontSize: 18,
        color: 'white',
        fontFamily: "Lato_700Bold",
        fontWeight: 'bold',
    },
    heading: {
        marginTop: 120
    }
});
