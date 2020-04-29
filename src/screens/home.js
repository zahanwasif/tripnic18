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
// import { connect } from 'react-redux';
// import {emailSignin,signout,facebookLogin,googleLogin,emailSignup} from '../redux/actions/auth_actions'
// //import {LoginManager,AccessToken} from 'react-native-fbsdk'
// import { GoogleSignin } from '@react-native-community/google-signin';
// import urlParse from 'url-parse';
// //import InAppBrowser from 'react-native-inappbrowser-reborn'
// import firebase from '../auth/react_firebase'
// import PushNotification from 'react-native-push-notification'
// import RemotePushController from '../services/RemotePushController'
// import {LocalNotification} from '../services/LocalPushController'
// import {store} from '../redux/store'

// const mapStateToProps = (state)=>{
//   //console.log(state)
//   return{
//     isEmpty:state.firebaseReducer.auth.isEmpty,
//     email:state.firebaseReducer.auth.email,
//     role:state.appReducer.isOrganizer
//   };
// }


// const mapDispatchToProps = (dispatch)=>{
//   return{
//     emailSignin: (email,password)=>{dispatch(emailSignin(email,password))},
//     signout:()=>{dispatch(signout())},
//     facebookLogin:()=>{dispatch(facebookLogin())},
//     googleLogin:()=>{dispatch(googleLogin())},
//     emailSignup: (form)=>{dispatch(emailSignup(form))}
//   };
// }

// // PushNotification.configure({
// //   // (required) Called when a remote or local notification is opened or received
// //   onNotification: function(notification) {
// //     console.log('LOCAL NOTIFICATION ==>', notification)
// //   },
// // popInitialNotification: true,
// //   requestPermissions: true
// // })

// // const LocalNotification = () => {
// //   PushNotification.localNotification({
// //     autoCancel: true,
// //     bigText:
// //       'This is local notification demo in React Native app. Only shown, when expanded.',
// //     subText: 'Local Notification Demo',
// //     title: 'Local Notification Title',
// //     message: 'Expand me to see more',
// //     vibrate: true,
// //     vibration: 300,
// //     playSound: true,
// //     soundName: 'default',
// //     actions: '["Yes", "No"]'
// //   })
// // }

// class Home extends React.Component {

//   constructor(props){
//     super(props);
//     this.state={
//       form:{
//         email:"testing8@testing.com",
//         password:"testing123",
//         role:this.props.role
//       }
//     }
// }

// emailSignin = ()=>{
//   store.dispatch(emailSignin('testing8@testing.com','testing123')).then((res)=>{
//     console.log(res)
//   })
  
// }
  
//   render(){
//     return (
//       <>
//         {/* <StatusBar translucent backgroundColor="transparent" /> */}
//         <StatusBar barStyle="default"/>
//         <View style={styles.container}>
//           {this.props.isEmpty ? <Text>Logged out</Text> : <Text>Logged in</Text> }
//           <Text>{this.props.email}</Text>
//           <Button title="test fb" onPress={()=>this.props.facebookLogin()}></Button>
//           <Button title="test link" onPress={this.openLink}></Button>
//           <Button title="test signup" onPress={()=>this.props.emailSignup(this.state.form)}></Button>
//           <Button title="test google" onPress={()=>this.props.googleLogin()}></Button>
//           <Button title="test signin" onPress={this.emailSignin}></Button>
          
//           <Button title="test signout" onPress={()=>this.props.signout()}></Button>
//           <Button title="test push notification" onPress={()=>LocalNotification()}></Button>
//           <View style={{backgroundColor:"green",maxWidth:100,borderRadius:15,padding:10}}>
//             <Text style={{color:"white"}}>
//               Testing is fbjfnsbsjbnd fbjnsb b snbfsn sdgnsbn sgjjsnbj j sjgnnsbnb jsbjnsb
//             </Text>
//           </View>
          
//           <RemotePushController/>
//         </View>
//       </>
//     );
//   }
// };


// export default connect(mapStateToProps,mapDispatchToProps)(Home)

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"red",
//     alignItems:'center',
//     justifyContent:'center'
//   },

// });

