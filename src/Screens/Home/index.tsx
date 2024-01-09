import {StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={style.view}>
      <Text style={{color: '#000'}}>Home screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
