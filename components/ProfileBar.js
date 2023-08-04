import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 

const ProfileBar = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Feather name="menu" size={24} color="black" />
			</TouchableOpacity>
			<View>
				<Text>Hi Tim!</Text>
			</View>
			<TouchableOpacity>
				<Feather name="bell" size={24} color="black" />
			</TouchableOpacity>
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