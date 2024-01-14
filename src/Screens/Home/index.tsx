import {Text, View} from 'react-native';
import {Button, Icon} from '@rneui/themed';

import Header from '../../components/Header';
import {ScreenProps} from '../../types';

import styles from './styles';

export default function HomeScreen({navigation}: ScreenProps<'Home'>) {
  const {navigate} = navigation;

  const handleAddCaloriesPress = () => navigate('AddFood');

  return (
    <View style={styles.view}>
      <Header />
      <View style={styles['calories-container']}>
        <View style={styles['left-container']}>
          <Text style={styles['calories-text']}>Calories</Text>
        </View>
        <View style={styles['right-container']}>
          <Button
            icon={<Icon name="add-circle-outline" color="#fff" />}
            radius="lg"
            color="#4ecb71"
            onPress={handleAddCaloriesPress}
          />
        </View>
      </View>
    </View>
  );
}
