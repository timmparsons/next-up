import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { ProfileBar, Categories, ShowList } from '../components';
import { apiCall } from '../api';

const HomeScreen = () => {
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		apiCall()
		.then(movie => {
			setMovies(movie)
		})
	}, []); 

  return (
    <SafeAreaView
			styles={styles.container}
		>
			<ProfileBar />
			<Categories />
			<ShowList shows={movies}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		marginLeft: 20
	}
});

export default HomeScreen;