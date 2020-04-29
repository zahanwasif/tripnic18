import React from 'react'
import {View,Text, Button} from 'react-native'
import { store } from '../../../redux/store'
import { signout } from '../../../redux/actions/auth_actions'

export default class TripsMain extends React.Component{
    render(){
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            
                <Text>My Trips</Text>
            </View>
        )
    }
}