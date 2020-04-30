import * as React from 'react';
import {Dimensions} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import TripsMain from './trips_main'

const {height,width} = Dimensions.get('screen') 

const Stack = createStackNavigator()

const TripsStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="My Trips" component={TripsMain}/>
        </Stack.Navigator>
    )
}

export default TripsStack