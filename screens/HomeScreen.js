import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { ProfileBar, Categories } from '../components';

const HomeScreen = () => {
  return (
    <SafeAreaView
			styles={styles.container}
		>
			<ProfileBar />
			<Categories />
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