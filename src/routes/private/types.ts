import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Private} from '../../screens';

export type BottomTabsTypes = {
  Home: undefined;
  Profile: undefined;
};

type PrivateScreens = {
  [key in keyof typeof Private]: undefined;
};
type OmittedScreen = 'Notification';

export type PrivateNavigationProp = Omit<PrivateScreens, OmittedScreen> & {
  Notification: undefined;
};

export type PrivateRoutesTypes = {
  TabLayout: undefined;
} & PrivateNavigationProp;

export type StackAndTabType = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsTypes>,
  NativeStackNavigationProp<PrivateRoutesTypes>
>;
