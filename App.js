import { StyleSheet} from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store'
import { Provider } from 'react-redux'

export default function App() {
  return (
		<Provider store={store}>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
		</Provider>
  );
}

const styles = StyleSheet.create({});
