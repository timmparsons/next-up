import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { CATEGORIES } from '../constants/categoriesData'
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-web';

const Categories = () => {
	return (
		<ScrollView 
			horizontal
			contentContainerStyle={{ paddingHorizontal: 15}}
		>
		{CATEGORIES.map((data, index) => {
			return (
				<TouchableOpacity key={index}>
					<View>
						<MaterialIcons name={data.icon} size={24} color="darkgray" />
						<Text>{data.category}</Text>
					</View>
				</TouchableOpacity>
			)
		})}
		</ScrollView>
	)
}

export default Categories