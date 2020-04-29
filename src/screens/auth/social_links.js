import React from 'react'
import { View,Text, Button } from 'react-native'
import {store} from '../../redux/store';
import {addSocialLinks} from '../../redux/actions/auth_actions'
import { TextInput } from 'react-native-gesture-handler';
import Loading from '../common/loading'

export default class SocialLinks extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fb:"",
            instagram:"",
            youtube:"",
            twitter:"",
            isLoading:false,
        }
    }

    AddSocialLinks = async ()=>{
        try {
            this.setState({isLoading:true})
            await store.dispatch(addSocialLinks(this.state.fb,this.state.instagram,this.state.youtube,this.state.twitter))
            this.setState({isLoading:false})
            this.props.navigation.navigate("Phone")
        } catch (error) {
            console.log(error)
        }
    }
    
    render(){
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text>Working on it</Text>
                <Button onPress={()=>{this.props.navigation.navigate("Phone")}} title="skip" ></Button>
                {/* <Text>Add Social Links</Text>
                <TextInput onChangeText={(fb)=>this.setState({fb:fb})} placeholder="Fb" />
                <TextInput onChangeText={(instagram)=>this.setState({instagram:instagram})} placeholder="Instagram" />
                <TextInput onChangeText={(youtube)=>this.setState({youtube:youtube})} placeholder="Yotube" />
                <TextInput onChangeText={(twitter)=>this.setState({twitter:twitter})} placeholder="Twitter" />
                <Button title="Add Links" onPress={this.AddSocialLinks} />
                <Loading visible={this.state.isLoading} /> */}
            </View>
        )
    }
}