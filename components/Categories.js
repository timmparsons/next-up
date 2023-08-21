import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';

import ShowList from './ShowList';
import { CATEGORIES } from '../constants/categoriesData';
import { fetchTvShows } from '../redux/extraReducers';
import { selectAllTvShows } from '../redux/slices/tvSlice';
import { selectAllMovies } from '../redux/slices/movieSlice';

const Categories = () => {
  const tvList = useSelector(selectAllTvShows);
  const movieList = useSelector(selectAllMovies);
  const [activeCategory, setActiveCategory] = useState('Movies');
  const [list, setList] = useState(movieList);

  const changeCategory = (category) => {
    setList(category === 'TV' ? tvList : movieList);
    setActiveCategory(category);
  };

  return (
    <View>
      <View>
        <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }}>
          {CATEGORIES.map(({ category }, index) => {
            let isActive = category == activeCategory;

            return (
              <TouchableOpacity key={index} onPress={() => setActiveCategory(category)}>
                <View style={styles.category}>
                  <Pressable onPress={() => changeCategory(category)}>
                    <Text style={styles.categoryText(isActive)}>{category}</Text>
                  </Pressable>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* <View style={styles.movieList}>{list.length > 0 ? <ShowList shows={list} /> : <ActivityIndicator />}</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  categoryText: (isActive) => ({
    fontSize: 24,
    color: isActive ? 'blue' : 'black',
  }),
  movieList: {
    marginTop: 10,
  },
});

export default Categories;
