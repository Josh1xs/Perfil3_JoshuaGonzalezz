import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ProfileScreen from './src/screens/ProfileScreen';
import ProductListScreen from './src/screens/ProductListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Perfil"
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerShadowVisible: false,
          headerTitleStyle: { color: '#1f2937', fontWeight: '700' },
          headerTintColor: '#2563eb',
          contentStyle: { backgroundColor: '#f5f7fb' },
        }}
      >
        <Stack.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{ title: 'Mi perfil' }}
        />
        <Stack.Screen
          name="Productos"
          component={ProductListScreen}
          options={{ title: 'Productos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
