import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, SafeAreaView } from 'react-native'
import { ProfileBar, Categories, ShowList } from '../components';
import { apiCall } from '../api';
import { addMovies } from '../redux/slices/movieSlice';

const HomeScreen = () => {
	// const [ movies, setMovies ] = useState([]);
	const movieList = useSelector((state) => state.movies.movies)
  const dispatch = useDispatch()

	useEffect(() => {
		apiCall()
		.then(movie => {
			dispatch(addMovies(movie))
		})
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