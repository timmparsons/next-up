import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Search = () => {

	const handleOnChange = () => {
		console.log('Click')
	};

	return (
		<SafeAreaView>
			<View styles={styles.container}>
				<TextInput
					style={styles.searchBar} 
					onChangeText={handleOnChange} 
					placeholder='Search'
					placeholderTextColor={'lightgray'}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 50
	},
	searchBar: {
		marginTop: 10,
		height: 50,
		width: '77%',
		paddingHorizontal: 10,
		marginHorizontal: 50,
		backgroundColor: 'white',
		borderColor: 'lightgray', //no effect
		borderRadius: 8
	}
});

export default Search;