import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/Home';
import Calendar from './screens/Calendar';
import { Text } from 'react-native';
import { useFonts, SourceSans3_300Light, SourceSans3_400Regular, SourceSans3_500Medium } from "@expo-google-fonts/source-sans-3";
import Feather from '@expo/vector-icons/Feather'

const Tab = createBottomTabNavigator();

export default function App() {
  
  let [fontsLoaded, fontError] = useFonts({
    SourceSans3_300Light,
    SourceSans3_400Regular,
    SourceSans3_500Medium
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            minHeight: 90,
            backgroundColor: '#0C1214',
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#A4A4A4',
          tabBarIcon: ({ color, size }) => {
            let name: "home" | "calendar" = route.name === "Home" ? "home" : "calendar"
            return <Feather name={name} size={size} color={color} />;
          },
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                marginTop: -8,
                fontSize: 12,
                color: color,
                fontFamily: focused ? 'SourceSans3_500Medium' : 'SourceSans3_300Light'
              }}
            >
              {route.name}
            </Text>
          ),
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calendar" component={Calendar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
