import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Getstarted from '../components/Getstarted';
import Home from '../components/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (

        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route ,}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Profile') {
                        iconName = 'person-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'aqua',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'rgba(1 ,11 , 20, 255)',
                    borderTopWidth: 0,
                },
            })}
        >


            <Tab.Screen name='Home' component={Home} options={{ headerShown: false, }} />
            <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false, }}  />
            <Tab.Screen name='Settings' component={Settings}options={{ headerShown: false, }}  />
        </Tab.Navigator>
    )
}


const Stacknavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Getstarted' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Tabs' component={TabNavigation} />
            <Stack.Screen name='Getstarted' component={Getstarted} />
        </Stack.Navigator>
    )
}

export default Stacknavigation

const styles = StyleSheet.create({})