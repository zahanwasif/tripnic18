import React from 'react'
import {View,Text, Button} from 'react-native'
import { store } from '../../../redux/store'
import { signout } from '../../../redux/actions/auth_actions'

export default class Home extends React.Component{
    render(){
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Button title ="logout" onPress={async()=>await store.dispatch(signout())} />
                <Text>Home</Text>
            </View>
        )
    }
}