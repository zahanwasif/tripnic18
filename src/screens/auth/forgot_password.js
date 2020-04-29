import React from 'react';
import {StyleSheet,View,Button,TextInput,Alert} from 'react-native';
import Loading from '../common/loading'
import {resetPassword } from '../../redux/actions/auth_actions'


export default class ForgoPassword extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email:this.props.route.params?.email,
        isLoading:false        
    }
}
  
  
   resetPassword = async()=>{
       try {
           this.setState({isLoading:true})
            await resetPassword(this.state.email)
            this.setState({isLoading:false})
            Alert.alert('Success',"An email with password reset link has been sent to your email",[{
                text:"OK",
                onPress:()=>{
                    this.props.navigation.goBack()
                }
            }])
        } 
       catch (error) {
        this.setState({isLoading:false})
        Alert.alert(error)   
       }
   }

  render(){
    return (
      <>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <View style={styles.container}>
          
          <TextInput onChangeText={(password)=>{
              this.setState({password})
          }}
          placeholder="Enter your email"
          defaultValue={this.props.route.params?.email}
          />
          <Button title="Reset Passowrd" onPress={this.resetPassword}></Button>
          <Loading visible={this.state.isLoading} />
        </View>
      </>
    );
  }
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },

});

