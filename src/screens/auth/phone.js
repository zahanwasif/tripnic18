import React from 'react';
import {StyleSheet,View,Button,TextInput, Alert} from 'react-native';
import { sendPhoneVerificationCode, navigateToMainApp } from '../../redux/actions/auth_actions';
import Loading from '../common/loading'
import { store } from '../../redux/store';

export default class Phone extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        phone:"",
        isLoading:false
    }
  }
  
  sendVerificationCode = async ()=>{
    try {
      this.setState({isLoading:true})
      const verificationId = await sendPhoneVerificationCode(this.state.phone)
      this.setState({isLoading:false})
      this.props.navigation.navigate("Code",{verificationId})  
    } catch (error) {
      this.setState({isLoading:false})
      Alert.alert(error)
    }
    
  }
  skipPhoneVerification = ()=>{
    store.dispatch(navigateToMainApp())
  }

  render(){
    return (
      <>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <View style={styles.container}>
          
          <TextInput onChangeText={(phone)=>{
              this.setState({phone})
          }}
          placeholder="Enter Phone Number"
          />
        
          <Button title="Send Code" onPress={this.sendVerificationCode}></Button>
          <Button title="Skip" onPress={this.skipPhoneVerification}></Button>
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

