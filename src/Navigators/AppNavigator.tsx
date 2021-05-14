import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
//import {SafeAreaConsumer, EdgeInsets } from 'react-native-safe-area-context';
import Starter from '../Screens/Starter';

declare interface IAppNavigator {}

const Stack = createStackNavigator();

const AppNavigator: React.FC<IAppNavigator> = () => {
  return (
    <Stack.Navigator
      initialRouteName="index"
      mode="modal"
      screenOptions={{
        headerTitleAlign: 'center',
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <Stack.Screen
        name="index"
        component={Starter}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
