import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { CATEGORIES } from '../constants/categoriesData'
import { MaterialIcons } from '@expo/vector-icons'; 
import { apiCall } from '../api';

const Categories = () => {
	const [ activeCategory, setActiveCategory ] = useState('Movies')

	return (
		<View>
			<ScrollView 
				horizontal
				contentContainerStyle={{ paddingHorizontal: 15}}
			>
			{CATEGORIES.map(({category}, index) => {
				let isActive = category == activeCategory;
	
				return (
					<TouchableOpacity key={index} onPress={() => setActiveCategory(category)}>
						<View style={styles.category}>
							<Text style={styles.categoryText(isActive)}>{category}</Text>
						</View>
					</TouchableOpacity>
				)
			})}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	category: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 50,
		paddingVertical: 15
	},
		categoryText: isActive => ({
			fontSize: 24,
			color: isActive ? 'blue' : 'black'
		})
})

export default Categories