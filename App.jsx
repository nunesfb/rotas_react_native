import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/pages/Home';
import About from './src/pages/About';

export default function App() {
  const StackNavigation = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: true, title: "Tela Inicial", headerStyle: { backgroundColor: '#000' }, headerTintColor: '#FFF' }}
        />
        <StackNavigation.Screen name="About" component={About} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}
