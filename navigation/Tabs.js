import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Dash from '../src/components/Dash';
import Account from '../src/components/Account';
import TickerForm from '../src/components/TickerForm';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) =>({
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 20,
                    left: 15,
                    right: 15,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    height: 100,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Dash') {
                      return (
                        <Ionicons
                          name={
                            focused
                              ? 'timer'
                              : 'timer-outline'
                          }
                          size={32}
                          color={color}
                        />
                      );
                    } else if (route.name === 'Account') {
                      return (
                        <Ionicons
                          name={focused ? 'person-circle' : 'person-circle-outline'}
                          size={32}
                          color={color}
                        />
                      );
                    
                    } else if (route.name === 'Create') {
                      return (
                        <Ionicons
                          name={focused ? "add-circle" : 'add-circle-outline'}
                          size={32}
                          color={color}
                        />
                      );
                    }
                  },
                  tabBarActiveTintColor: 'cadetblue',
                tabBarInactiveTintColor: 'gray',

            })}>
        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen style={styles.shadow} name="Dash" component={Dash} />
        <Tab.Screen name="Create" component={TickerForm} />
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 3,
        fontWeight: 'bold',
    }
})
export default Tabs;