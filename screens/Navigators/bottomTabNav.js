import { Text, StyleSheet, Platform, StatusBar, View, Button, Image, TextInput, ImageBackground } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from '../Main';
import { ProfileScreen } from '../Profile';
import { DownloadScreen } from '../Download'

export const BottomTabNav = () => {
    const BottomTab = createBottomTabNavigator();

    return (
        <BottomTab.Navigator
            initialRouteName="Main"
            screenOptions={{
                tabBarActiveTintColor: '#320450',
                tabBarInactiveTintColor: '#007965',
                tabBarStyle: {
                    backgroundColor: '#DE703C',
                },
                headerShown: false,
            }}>
            <BottomTab.Screen name="Favorites" component={DownloadScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <AntDesign name={focused ? 'heart' : 'hearto'} color={color} size={size} />;
                    },
                }}
            />

            <BottomTab.Screen name="Main" component={MainScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />;
                    },
                }}
            />


            <BottomTab.Screen name="Profile" component={ProfileScreen} 
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <FontAwesome name={focused ? 'user' : 'user-o'} color={color} size={size} />;
                    },
                }}
            />
        </BottomTab.Navigator>
    );
};
