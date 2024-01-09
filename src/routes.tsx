import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';

const {Navigator, Screen} = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
