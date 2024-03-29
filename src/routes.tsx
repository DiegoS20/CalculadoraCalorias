import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import AddFoodScreen from './screens/AddFood';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();
export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="AddFood" component={AddFoodScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export type RootStackParamList = {
  Home: undefined;
  AddFood: undefined;
};
