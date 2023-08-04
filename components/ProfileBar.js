import React from 'react'
import Search from './Search';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { NAME } from '../constants';

const ProfileBar = () => {
	return (
		<View>
		<View style={styles.container}>
			<TouchableOpacity>
				<Feather name="menu" size={24} color="black" />
			</TouchableOpacity>
			<View>
				<Text>Hi {NAME}!</Text>
			</View>
			<TouchableOpacity>
				<Feather name="bell" size={24} color="black" />
			</TouchableOpacity>
		</View>
		<View>
			<Search />
		</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 15
	}
})

export default ProfileBar