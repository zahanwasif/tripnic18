import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TripsMain from './trips_main'
const Stack = createStackNavigator()

const TripsStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="My Trips" component={TripsMain}/>
        </Stack.Navigator>
    )
}

export default TripsStack