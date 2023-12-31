import React from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Search = () => {

	const handleOnChange = () => {
		console.log('Click')
	};

	return (
		<View style={styles.container}>
			<View className='mag-glass'>
				<View style={styles.magnifyingGlass}>
					<MaterialCommunityIcons name="magnify" size={24} color="darkgray" />
				</View>
				<View>
				<TextInput
					style={styles.searchBar} 
					onChangeText={handleOnChange} 
					placeholder='Search'
					placeholderTextColor={'lightgray'}
				/>

				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// flexDirection: 'row',
		// justifyContent: 'space-between',
		// backgroundColor: 'rgb(245 245 245)',
		// paddingHorizontal: 50,
		// borderRadius: '9999px',
	},
	magnifyingGlass: {
		position: 'absolute',
		left: 55,
		top: 25,
		zIndex: 1
	},
	searchBar: {
		marginTop: 10,
		height: 50,
		width: '77%',
		paddingHorizontal: 45,
		marginHorizontal: 50,
		backgroundColor: 'white',
		borderColor: 'lightgray', //no effect
		borderRadius: 8
	}
});

export default Search;