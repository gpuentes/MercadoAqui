import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/Produto';
import TabTwoScreen from '../screens/Servico';
import TabStores from '../screens/Stores'
import TabCategorys from '../screens/Categorys'
import TabSearch from '../screens/Search'
import TabFinish from '../screens/Finish'


import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabStoresParamList, TabCategorysParamList, TabSearchParamList, TabFinishParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Lojas"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Lojas"
        component={TabStoresNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Categorias"
        component={TabCategorysNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Busca"
        component={TabSearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Finalizar"
        component={TabFinishNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      {/* <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabStoresStack = createStackNavigator<TabStoresParamList>()


function TabStoresNavigator() {
  return (
    <TabStoresStack.Navigator>
      <TabStoresStack.Screen
        name="Lojas"
        component={TabStores}
        options={{ headerTitle: 'Lojas' }}
      />
    </TabStoresStack.Navigator>
  );
}

const TabCategorysStack = createStackNavigator<TabCategorysParamList>()


function TabCategorysNavigator() {
  return (
    <TabCategorysStack.Navigator>
      <TabCategorysStack.Screen
        name="Categorias"
        component={TabCategorys}
        options={{ headerTitle: 'Categorias' }}
      />
    </TabCategorysStack.Navigator>
  );
}

const TabSearchStack = createStackNavigator<TabSearchParamList>()


function TabSearchNavigator() {
  return (
    <TabSearchStack.Navigator>
      <TabSearchStack.Screen
        name="Busca"
        component={TabSearch}
        options={{ headerTitle: 'Buscas' }}
      />
    </TabSearchStack.Navigator>
  );
}

const TabFinishStack = createStackNavigator<TabFinishParamList>()


function TabFinishNavigator() {
  return (
    <TabFinishStack.Navigator>
      <TabFinishStack.Screen
        name="Finalizar"
        component={TabFinish}
        options={{ headerTitle: 'Finalizar' }}
      />
    </TabFinishStack.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();


// function TabOneNavigator() {
//   return (
//     <TabOneStack.Navigator>
//       <TabOneStack.Screen
//         name="TabOneScreen"
//         component={TabOneScreen}
//         options={{ headerTitle: 'Tab One Title' }}
//       />
//     </TabOneStack.Navigator>
//   );
// }

// const TabTwoStack = createStackNavigator<TabTwoParamList>();

// function TabTwoNavigator() {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="TabTwoScreen"
//         component={TabTwoScreen}
//         options={{ headerTitle: 'Tab Two Title' }}
//       />
//     </TabTwoStack.Navigator>
//   );
// }
