import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const ShowList = ({ shows }) => {
  console.log('QQQ', shows);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={3}
        data={shows}
        renderItem={({ item, index }) => {
          console.log('QQQ1', item);
          return (
            <View style={styles.imageContainer}>
              <Image style={styles.listImage} source={{ uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}` }} />
              <Text style={styles.showTitle}>
                {item?.original_title.length > 12 ? item.original_title.slice(0, 12) + '...' : item.original_title}
              </Text>
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
