import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { CATEGORIES } from '../constants/categoriesData'
import { MaterialIcons } from '@expo/vector-icons'; 

const Categories = () => {
	const [ activeCategory, setActiveCategory ] = useState('')

	return (
		<ScrollView 
			horizontal
			contentContainerStyle={{ paddingHorizontal: 15}}
		>
		{CATEGORIES.map(({category}, index) => {
			let isActive = category == activeCategory;
			let activeButton = isActive ? '#ff7276' : '';

			return (
				<TouchableOpacity key={index} onPress={() => setActiveCategory(category)}>
					<View style={styles.category}>
						<Text style={styles.categoryText(activeButton)}>{category}</Text>
					</View>
				</TouchableOpacity>
			)
		})}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	category: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 70,
		paddingVertical: 15
	},
		categoryText: activeButton => ({
			fontSize: 24,
			color: activeButton
		})
})

export default Categories