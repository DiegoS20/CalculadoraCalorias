import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Icon} from '@rneui/themed';

import styles from './styles';

export default function Header() {
  const {canGoBack, goBack} = useNavigation();
  const {name, imageUrl} = StaticInfo;

  return (
    <View style={styles.container}>
      {canGoBack() && (
        <View style={styles['go-back-btn']}>
          <Button
            icon={<Icon name="arrow-back" size={24} />}
            type="clear"
            onPress={() => goBack()}
          />
        </View>
      )}
      <View style={styles['left-container']}>
        <Text style={styles.name}>Hello {name}</Text>
        <Text style={styles.subtitle}>Welcome back to your goal</Text>
      </View>
      <View style={styles['right-container']}>
        <Image source={{uri: imageUrl}} style={styles['profile-image']} />
      </View>
    </View>
  );
}

const StaticInfo = {
  name: 'Diego Saravia',
  imageUrl: 'https://avatars.githubusercontent.com/u/10101138?v=4',
};
