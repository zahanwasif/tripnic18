import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../../screens/auth/start'
import Auth from '../../screens/auth/auth'
import Login from '../../screens/auth/login'
import Signup from '../../screens/auth/signup'
import CreateAccount from '../../screens/auth/create_account'
import Phone from '../../screens/auth/phone'
import Code from '../../screens/auth/code'
import ForgotPassword from '../../screens/auth/forgot_password'
import AboutCompany from '../../screens/auth/about_company'
import SocialLinks from '../../screens/auth/social_links'

const Stack = createStackNavigator()

const AppAuthStack = ()=>{
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Start" component={Start}/>
            <Stack.Screen name="Auth" component={Auth}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount}/>
            <Stack.Screen name="AboutCompany" component={AboutCompany}/>
            <Stack.Screen name="SocialLinks" component={SocialLinks}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
            <Stack.Screen name="Phone" component={Phone}/>
            <Stack.Screen name="Code" component={Code}/>
        </Stack.Navigator>
    )
}

export default AppAuthStack