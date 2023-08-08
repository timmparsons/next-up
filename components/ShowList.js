import React from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'

const ShowList = ({ shows: { results} }) => {
	
	return (
		<View>
			<FlatList
				numColumns={3}
				data={results}
				renderItem={({item, index}) => {
					console.log('qqq', item.original_title.length)
				return (<View>
					<Image
						style={styles.listImage}
						source={{uri:`https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
						/>
						<Text>{item.original_title.length > 12 ? item.original_title.split(0, 12) : item.original_title}</Text>
					</ View>
				)}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	listImage: {
		// flex: 1,
		flexDirection: 'row',
		height: 200,
		marginHorizontal: 7,
		marginVertical: 5,
		width: '30%'
	}
})

export default ShowList;