import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  view: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  ['calories-container']: {
    alignItems: 'center',
    marginVertical: 24,
    flexDirection: 'row',
  },
  ['left-container']: {
    flex: 1,
    justifyContent: 'center',
  },
  ['right-container']: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ['calories-text']: {
    fontSize: 20,
  },
});
