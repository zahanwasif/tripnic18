import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview'
import { sendPhoneVerificationCode } from '../../../redux/actions/auth_actions';

export default class Recaptcha extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <View style={{ flex: 1 }}>
        <WebView
          source={{uri:  'https://tripnic-18.firebaseapp.com' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onMessage={async(e)=>{
            var token = e.nativeEvent.data
            const verificationId = await sendPhoneVerificationCode(token,this.props.route.params?.phone)
            this.props.navigation.navigate("Code",{verificationId}) 
          }}
          startInLoadingState={true}
        />
      </View>
    )
  }
};



