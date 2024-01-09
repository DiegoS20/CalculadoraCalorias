import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Routes from './src/routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default App;
