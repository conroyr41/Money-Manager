import React from 'react';
import Tabs from './components/Tab';

import { NavigationContainer } from '@react-navigation/native';

export default function App() 
{
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}