import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' options={{headerShown: false }} component={HomeScreen} />
		</Stack.Navigator>
	)
}

export default AppNavigation