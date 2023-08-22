import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const ShowList = ({ shows, category }) => {
  // Alter title size to fit under image
  const showTitle = (category, item) => {
    if (category === 'Movies') {
      return item?.original_title.length > 12 ? item.original_title.slice(0, 12) + '...' : item.original_title;
    }
    if (category === 'TV') {
      return item?.original_name.length > 12 ? item.name.slice(0, 12) + '...' : item.name;
    }
  };

  return (
    <View>
      <FlatList
        numColumns={3}
        data={shows}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.imageContainer}>
              <Image style={styles.listImage} source={{ uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}` }} />
              <Text style={styles.showTitle}>{showTitle(category, item)}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '33%',
    marginHorizontal: 1,
    marginVertical: 3,
  },
  listImage: {
    height: 200,
    width: '100%',
  },
  showTitle: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShowList;
