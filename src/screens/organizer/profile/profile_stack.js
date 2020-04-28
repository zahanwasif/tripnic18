import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileMain from './profile_main'
const Stack = createStackNavigator()

const ProfileStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileMain}/>
        </Stack.Navigator>
    )
}

export default ProfileStack