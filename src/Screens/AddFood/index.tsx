import {Text, View} from 'react-native';
import {Button, Icon, Input} from '@rneui/themed';
import Header from '../../components/Header';

import styles from './styles';

export default function AddFood() {
  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles['add-food-container']}>
        <View style={styles['legend-container']}>
          <Text style={{fontSize: 20}}>Add Food</Text>
        </View>
        <View style={styles['add-food-btn-container']}>
          <Button
            icon={<Icon name="add-circle-outline" color="#fff" />}
            radius="lg"
            color="#4ecb71"
          />
        </View>
      </View>
      <View style={styles['search-container']}>
        <View style={styles['input-container']}>
          <Input placeholder="Apples, Fries, Soda..." />
        </View>
        <Button
          title="Search"
          color="#ade8af"
          titleStyle={styles['search-btn-title-styles']}
          radius="lg"
        />
      </View>
    </View>
  );
}
