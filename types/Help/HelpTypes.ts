import { RootStackParamList } from "../../navigation/NavigationRoot";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HelpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Help"
>;
export type HelpNavigation = HelpScreenProps["navigation"];
