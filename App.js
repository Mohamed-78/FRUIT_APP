import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "./constants";
import Welcome from "./components/pages/welcome/Welcome";
import Explorer from "./components/pages/explorer/Explorer";
import Cart from "./components/pages/cart/Cart";
import Favori from "./components/pages/favoris/Favori";
import Profil from "./components/pages/profil/Profil";
import Detail from "./components/pages/details-produit/Detail";
import ExplorerProduct from "./components/pages/explorerproduct/ExplorerProduct";
import SplashScreen from "./components/pages/splashscreen/SplashScreen";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
  return (
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

          if (route.name === "Shop") {
            iconName = focused ? "shopping-bag" : "shopping-bag";
          } else if (route.name === "Explore") {
            iconName = focused ? "wpexplorer" : "wpexplorer";
          } else if (route.name === "Cart") {
            iconName = focused ? "shopping-cart" : "shopping-cart";
          } else if (route.name === "Favourite") {
            iconName = focused ? "heart-o" : "heart-o";
          } else if (route.name === "Account") {
            iconName = focused ? "user-o" : "user-o";
          }

          return <FontAwesome name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#000",
      })}
    >
      <Tab.Screen name="Shop" component={Welcome} />
      <Tab.Screen name="Explore" component={Explorer} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favourite" component={Favori} />
      <Tab.Screen name="Account" component={Profil} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="ExplorerProduct" component={ExplorerProduct} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
