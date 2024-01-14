import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './routes';

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
