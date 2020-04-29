import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './home'
const Stack = createStackNavigator()

const HomeStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}

export default HomeStack