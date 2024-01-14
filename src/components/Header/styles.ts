import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
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
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitle: {
    color: '#808080',
    fontSize: 12,
  },
  ['profile-image']: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },
  ['go-back-btn']: {
    marginLeft: -12,
  },
});
