import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from '../../screens/common/app_loading'
import ChooseRole from '../../screens/common/choose_role'
const Stack = createStackNavigator()

const AppLoadingScreens = ({})=>{
    return(
        <Stack.Navigator headerMode="none" initialRouteName="AppLoading">
            <Stack.Screen name="AppLoading" component={AppLoading}/>
            <Stack.Screen name="ChooseRole" component={ChooseRole}/>
        </Stack.Navigator>
    )
}

export default AppLoadingScreens