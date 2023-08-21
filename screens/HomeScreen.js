import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { ProfileBar, Categories, ShowList } from '../components';
import { fetchMovies, fetchTvShows } from '../redux/extraReducers';
import { selectAllMovies } from '../redux/slices/movieSlice';

const HomeScreen = () => {
  const list = useSelector(selectAllMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchTvShows());
  }, []);
  console.log('LIST ', list.length);

  return (
    <SafeAreaView styles={styles.container}>
      <ProfileBar />
      <Categories />
      {/* {list ? <ShowList shows={list} /> : <ActivityIndicator />} */}
      <ShowList shows={list} />
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
