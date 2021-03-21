import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScrollScreen from './src/Screen/ScrollScreen';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scroll" screenOptions={{ title: '', headerTransparent: true }}>
        <Stack.Screen name="Mikies App" component={ScrollScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;