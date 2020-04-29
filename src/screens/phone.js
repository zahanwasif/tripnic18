// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   StatusBar,
//   Platform,
//   Linking,
//   Button,
  
// } from 'react-native';
// import {WebView} from 'react-native-webview'
// import { connect } from 'react-redux';
// import {sendCode,verifyCode} from '../redux/actions/actions'
// //import {LoginManager,AccessToken} from 'react-native-fbsdk'
// import { GoogleSignin } from '@react-native-community/google-signin';
// import urlParse from 'url-parse';
// //import InAppBrowser from 'react-native-inappbrowser-reborn'
// import firebase from '../auth/react_firebase'

// const mapStateToProps = (state)=>{
//   //console.log(state)
//   return{
//     // isEmpty:state.firebaseReducer.auth.isEmpty,
//     // email:state.firebaseReducer.auth.email,
//     // authMsg:state.authReducer.authMsg
//   };
// }


// const mapDispatchToProps = (dispatch)=>{
//   return{
//      sendCode: (verificationId)=>{dispatch(sendCode(verificationId))},
//      verifyCode: (code)=>{dispatch(verifyCode(code))},
//     // signin: (email,password)=>{dispatch(signin(email,password))},
//     // signout:()=>{dispatch(signout())},
//     // facebookLogin:()=>{dispatch(facebookLogin())},
//     // googleLogin:()=>{dispatch(googleLogin())},
//   };
// }

// //const myHtmlFile = require("../../phone_verification/public/index.html");

// class Phone extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             number:"+923034133448",
//             askedForUrl:false
//         }
//     }

//   // async openLink() {
//   //   try {
//   //     const url = 'https://tutin-9010.firebaseapp.com'
//   //     if (await InAppBrowser.isAvailable()) {
//   //       const result = await InAppBrowser.open(url, {
    
//   //         // Android Properties
//   //         showTitle: false,
//   //         toolbarColor: '#F34590',
//   //         secondaryToolbarColor: 'black',
//   //         enableUrlBarHiding: true,
//   //         enableDefaultShare: true,
//   //         forceCloseOnRedirection: false,
//   //         // Specify full animation resource identifier(package:anim/name)
//   //         // or only resource name(in case of animation bundled with app).
//   //         animations: {
//   //           startEnter: 'slide_in_right',
//   //           startExit: 'slide_out_left',
//   //           endEnter: 'slide_in_left',
//   //           endExit: 'slide_out_right'
//   //         },
//   //         // headers: {
//   //         //   'my-custom-header': 'my custom header value'
//   //         // }
//   //       })
//   //       alert(JSON.stringify(result))
//   //     }
//   //     else Linking.openURL(url)
//   //   } catch (error) {
//   //       alert(error.message)
//   //   }
//   // }


//   // componentDidMount() { // B
//   // if (Platform.OS === 'android') {
//   //   Linking.getInitialURL().then(url => {
//   //     this.navigate(url);
//   //   });
//   // } else {
//   //     Linking.addEventListener('url', this.handleOpenURL);
//   //   }
//   // }
  
//   // componentWillUnmount() { // C
//   //   Linking.removeEventListener('url', this.handleOpenURL);
//   // }
//   // handleOpenURL = (event) => { // D
//   //   this.navigate(event.url);
//   // }
//   // navigate = (url) => { // E
//   //   if(url && askedForUrl){
//   //     const parsedUrl = urlParse(url, true);
//   //     const {query: {token}} = parsedUrl;
//   //     //console.log(token)
//   //     const captchaVerifier = {
//   //       type: 'recaptcha',
//   //       verify: () => Promise.resolve(token)
//   //   }
    
//   //     var provider = new firebase.auth.PhoneAuthProvider();
//   //       provider.verifyPhoneNumber(this.state.number, captchaVerifier)
//   //         .then((verificationId)=> {
//   //             console.log(verificationId)
//   //             console.log("verification")
//   //             //this.props.sendCode(verificationId)
//   //             //console.log("verificationid")
//   //             //console.log(verificationId)
//   //           //this.props.navigation.navigate('Verify',{verificationId:verificationId})
//   //         }).catch(error=>{
//   //             //alert(error)
//   //             console.log(error)
//   //         })

//   //   } 
    
//   // }


//   render(){
//     const runFirst = `
//       document.body.style.backgroundColor = 'red';
//       setTimeout(function() { window.alert('hi') }, 2000);
//       true; // note: this is required, or you'll sometimes get silent failures
//     `;
//     return (
//       <View style={{ flex: 1 }}>
//         <WebView
//           source={{
//             uri:  'https://tripnic-18.firebaseapp.com'
//               // 'https://logrocket.com/', 
//           }}
//           //injectedJavaScript={runFirst}
//           javaScriptEnabled={true}
//           domStorageEnabled={true}
//           onMessage={(e)=>{
//             console.log(e.nativeEvent.data)
//             this.props.navigation.navigate("home")
//           }}
//           startInLoadingState={true}
//         />
//       </View>
//     );
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Phone)

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"red",
//     alignItems:'center',
//     justifyContent:'center'
//   },

// });

