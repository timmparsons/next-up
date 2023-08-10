import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, SafeAreaView } from 'react-native'
import { ProfileBar, Categories, ShowList } from '../components';
import { fetchMovies } from '../redux/extraReducers';

const HomeScreen = () => {
  const dispatch = useDispatch()
	const movieList = useSelector(state => state.movies.movieList)

	useEffect(() => {
			dispatch(fetchMovies())
	}, []); 

  return (
    <SafeAreaView
			styles={styles.container}
		>
			<ProfileBar />
			<Categories />
			<ShowList shows={movieList}/>
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