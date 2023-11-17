import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {AlertNotificationRoot } from "react-native-alert-notification"
import { Boton } from './components/boton';
import Home from './screens/Home';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login';

export default function App() {

  //ejemplo de login

  return (
    <AlertNotificationRoot>
    <Login></Login>
    </AlertNotificationRoot>
  );

  //EJEMPLO USUANDO NAVEGACION BOTON TAPS
  // const Tab = createBottomTabNavigator();
  // return (
  //   <>
  //     <NavigationContainer>
  //       <StatusBar style="auto" />
  //       <Tab.Navigator>
  //         <Tab.Screen name="Home" component={Home} />
  //         <Tab.Screen name="ScreenOne" component={ScreenOne} />
  //         <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
  //       </Tab.Navigator>
  //     </NavigationContainer>

  //   </>
  // );

  // //EJEMPLO USUANDO NAVEGACION DRAWER
  // const Drawer = createDrawerNavigator();
  // return (
  //   <>
  //     <NavigationContainer>
  //       <StatusBar style="auto" />
  //       <Drawer.Navigator>
  //         <Drawer.Screen name="Home" component={Home} />
  //         <Drawer.Screen name="ScreenOne" component={ScreenOne} />
  //         <Drawer.Screen name="ScreenTwo" component={ScreenTwo} />
  //       </Drawer.Navigator>
  //     </NavigationContainer>
  //     <Boton text="Haz tu donacion"></Boton>
  //   </>
  // );
  //EJEMPLO USUANDO NAVEGACION STACK

  // const Stack = createNativeStackNavigator();
  // return (
  //   <>
  //     <NavigationContainer>
  //       <StatusBar style="auto" />
  //       <Stack.Navigator>
  //         <Stack.Screen
  //           name="Home"
  //           component={Home}
  //           options={{ title: "Inicio" }}
  //         />
  //         <Stack.Screen name="ScreenOne"
  //           component={ScreenOne}
  //           options={{ headerBackVisible: false }}
  //         />
  //         <Stack.Screen
  //           name="ScreenTwo"
  //           component={ScreenTwo}
  //           options={{ headerShown: false }}
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //     <Boton text="Haz tu donacion"></Boton>
  //   </>
  // );
}

