import React from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
declare interface IStarter {}

const Starter: React.FC<IStarter> = () => {
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.text}>Starter Screen</Text>
    </View>
  );
};

export default Starter;
