// import React from 'react';
// import {StyleSheet,View,Text} from 'react-native';
// import { connect } from 'react-redux';
// import NetInfo from "@react-native-community/netinfo";

// const mapStateToProps = (state)=>{
//     console.log(state)
//   return{
//     isEmpty:state.firebaseReducer.auth.isEmpty,
//     isLoaded:state.firebaseReducer.auth.isLoaded,
//   };
// }


// const mapDispatchToProps = (dispatch)=>{
//   return{
//   };
// }

// const NavigateTo = ({nav})=>{
//     React.useEffect(()=>{
//         nav()
//     })
//     return null
// }

// class Start extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             internet:false,
//             unsubscribe:null
//         }
//     }
    
//     componentDidMount(){
//         this.state.unsubscribe = NetInfo.addEventListener(state => {
//             // console.log("Connection type", state.type);
//             // console.log("Is connected?", state.isConnected);
//             this.setState({internet:state})
//           });
          
//           // Unsubscribe
//     }
//     componentWillUnmount(){
//         this.state.unsubscribe();
//     }
    
//     navigateToAuth = ()=>{
//         this.props.navigation.navigate('auth')
//     }
//     navigateToMain = () =>{
//         this.props.navigation.navigate('home')
//     }

//   render(){
//     return (
//       <View style={styles.container}>
          
//         {
//               !this.props.isLoaded?
//               <Text>Loading the App..</Text>:<NavigateTo nav={!this.props.isEmpty?this.navigateToAuth:this.navigateToMain}/>
//         }
//       </View>
//     );
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Start)

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
//   },

// });

