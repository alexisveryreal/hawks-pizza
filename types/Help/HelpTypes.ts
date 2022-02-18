import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/NavigationRoot';

export type HelpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Help'
>;
export type HelpNavigation = HelpScreenProps['navigation'];
