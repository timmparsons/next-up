import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ProfileBar, Categories, ShowList } from '../components';
import { fetchMovies, fetchTvShows } from '../redux/extraReducers';
import { selectAllMovies } from '../redux/slices/movieSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchTvShows());
  }, []);

  return (
    <SafeAreaView styles={styles.container}>
      <ProfileBar />
      <Categories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginLeft: 20,
  },
});

export default HomeScreen;
