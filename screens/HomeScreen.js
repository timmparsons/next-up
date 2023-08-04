import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Search from '../components/Search';
import ProfileBar from '../components/ProfileBar';

const HomeScreen = () => {
  return (
    <SafeAreaView
			styles={styles.container}
		>
			<ProfileBar />
      <Search />
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