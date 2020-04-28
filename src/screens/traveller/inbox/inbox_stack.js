import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import InboxMain from './inbox_main'
const Stack = createStackNavigator()

const InboxStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inbox" component={InboxMain}/>
        </Stack.Navigator>
    )
}

export default InboxStack