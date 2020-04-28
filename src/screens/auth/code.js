import React from 'react';
import {StyleSheet,View,Button,TextInput, Alert} from 'react-native';
import { store } from '../../redux/store';
import {verifyCode, navigateToMainApp} from '../../redux/actions/auth_actions'
import Loading from '../common/loading'

export default class Code extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        code:"",
        isLoading:false
    }
}

  verifyCode = async ()=>{
      try {
        this.setState({isLoading:true})
        await verifyCode(this.state.code,this.props.route.params?.verificationId)
        this.setState({isLoading:false})
        store.dispatch(navigateToMainApp())
      } catch (error) {
        this.setState({isLoading:false})
          Alert.alert(error)
      }
  }
  
  render(){
    return (
      <>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <View style={styles.container}>
          
          <TextInput onChangeText={(code)=>{
              this.setState({code})
          }}
          placeholder="Enter Code"
          />
        
          <Button title="Verify Code" onPress={this.verifyCode}></Button>
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

