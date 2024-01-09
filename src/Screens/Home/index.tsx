import {Button, ButtonProps} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

const RaisedButton = (props: ButtonProps) => <Button raised {...props} />;

export default function HomeScreen() {
  return (
    <View style={style.view}>
      <RaisedButton title="Home screen" />
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
