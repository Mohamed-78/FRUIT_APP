import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Welcome } from "./components/pages/welcome/Welcome";
import Explorer from './components/pages/explorer/Explorer';
import { COLORS } from './constants';

function HomeScreen() {
  return (
    <Welcome/>
  );
}

function ExploreScreen() {
  return (
    <Explorer/>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart!</Text>
    </View>
  );
}

function FavoriteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favoris!</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Compte!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            shadowOpacity: 0.35,
            shadowRadius: 15.0,
            elevation: 26,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Shop') {
              iconName = focused ? 'shopping-bag' : 'shopping-bag';
            } else if (route.name === 'Explore') {
              iconName = focused ? 'wpexplorer' : 'wpexplorer';
            }else if(route.name === "Cart"){
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
            }else if(route.name === "Favourite"){
              iconName = focused ? 'heart-o' : 'heart-o';
            }else if(route.name === "Account"){
              iconName = focused ? 'user-o' : 'user-o';
            }
            
            return <FontAwesome name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: "#000",
        })}>
        <Tab.Screen name="Shop" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Favourite" component={FavoriteScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
