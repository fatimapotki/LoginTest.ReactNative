/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Navigators/AppNavigator';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import Starter from './src/Screens/Starter';

const Application = () => {
  return <Starter />;
};

AppRegistry.registerComponent(appName, () => Application);
