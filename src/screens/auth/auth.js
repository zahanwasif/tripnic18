import React from 'react';
import {StyleSheet,View,TouchableOpacity,Text,TextInput, Alert,Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {store} from '../../redux/store';
import Icon from 'react-native-vector-icons/Ionicons'
import { facebookLogin, googleLogin, validateUser, navigateToMainApp} from '../../redux/actions/auth_actions'

const {width} = Dimensions.get('window')

const mapStateToProps = (state)=>{
  return{
    isOrganizer:state.authReducer.isOrganizer,
  };
}

class Auth extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email:"",
    }
}
  
facebookLogin = async ()=>{
    try {
        await facebookLogin()
        var profileExists = await store.dispatch(validateUser(this.props.isOrganizer))
        if(profileExists){
            //go to main app
            store.dispatch(navigateToMainApp())
        }
        else{
            //go to create account
            this.props.navigation.navigate("CreateAccount",{isSocialAccount:true})
        }    
    } catch (error) {
        Alert.alert(error)
    }
    
}

googleLogin = async()=>{
    try {
        await googleLogin()
        var profileExists = await store.dispatch(validateUser(this.props.isOrganizer))
        if(profileExists){
            //go to main app
            store.dispatch(navigateToMainApp())
        }
        else{
            //go to create account
            this.props.navigation.navigate("CreateAccount",{isSocialAccount:true})
        }    
    } catch (error) {
        Alert.alert(error)
    }
    
}



  
  render(){
    return (
      <>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        
        <View style={styles.container} >
          <View style={styles.iconLeft} >
            <Icon onPress={()=>this.props.navigation.goBack()} name="ios-arrow-round-back" size={40} />
          </View>
          <View style={styles.interactionContainer}>
            <View style={{justifyContent:"flex-start", width:width, paddingLeft:40}} >
              <Text style={{fontSize:22,fontWeight:"bold"}}>Login/Signup</Text>
            </View>
            <View style={styles.input} >
              <TextInput  style={styles.inputText} onChangeText={(email)=>{
              this.setState({email})
              }}
              placeholder={this.props.isOrganizer?"Enter Your Business Email":"Enter Your Email"} />
          </View>
            <View style={styles.authButtonContainer}>
                <TouchableOpacity activeOpacity={0.9} style={
                  this.props.isOrganizer?styles.organizerLoginButton:styles.travellerLoginButton
                  } onPress={()=>this.props.navigation.navigate("Login",{email:this.state.email})} >
                  <Text style={styles.ButtonText} >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={
                  this.props.isOrganizer?styles.organizerSignupButton:styles.travellerSignupButton
                  } onPress={()=>this.props.navigation.navigate("Signup",{email:this.state.email})} >
                  <Text style={styles.ButtonText} >Signup</Text>
                </TouchableOpacity>
              </View>
            <Text style={styles.orConnectWithText} >Or connect with</Text>
              <View style={styles.socialButtonsContainer}>
                <TouchableOpacity activeOpacity={0.9} style={styles.fbButton} onPress={this.facebookLogin} >
                  <Text style={styles.ButtonText} >Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.googleButton} onPress={this.googleLogin} >
                  <Text style={styles.ButtonText} >Google</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.termsContainer} >
            {/* <View style={{width:300,paddingVertical:20}}>
              <Text style={styles.termsText}>{`By proceeding you agree to Tripnic's Privacy Policy, User Agreement and Terms of Service`}</Text>
            </View> */}
          </View>
        </View>
        {/* <View style={styles.container}>
          
          <Button title="fb login" onPress={this.facebookLogin}></Button>
          <Button title="google login" onPress={this.googleLogin}></Button>
          <TextInput onChangeText={(email)=>{
              this.setState({email})
          }}
          placeholder={this.props.isOrganizer?"Enter Your Business Email":"Enter Your Email"}
          />
          <Button title="Login" onPress={()=>this.props.navigation.navigate("Login",{email:this.state.email})}></Button>
          <Button title="Signup" onPress={()=>this.props.navigation.navigate("Signup",{email:this.state.email})}></Button>
        </View> */}
      </>
    );
  }
};


export default connect(mapStateToProps)(Auth)

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  interactionContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    //backgroundColor:"red",
  },
  termsContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:100
    
  },
  iconLeft:{
    height:50,
    paddingLeft:15,
    justifyContent:"center",
    width:width,
  },
  socialButtonsContainer:{
    flexDirection:"row",
    justifyContent:"center",
    paddingVertical:30
   
  },
  googleButton:{
    backgroundColor:"#DD4B39",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginLeft:5
  },
  fbButton:{
    backgroundColor:"#3B5998",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginRight:5
  },
  authButtonContainer:{
    flexDirection:"row",
    justifyContent:"center",
    paddingVertical:30
   
  },
  organizerSignupButton:{
    backgroundColor:"#2F9AE3",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginLeft:5
  },
  organizerLoginButton:{
    backgroundColor:"#2F9AE3",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginRight:5
  },
  travellerSignupButton:{
    backgroundColor:"#2BB396",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginLeft:5
  },
  travellerLoginButton:{
    backgroundColor:"#2BB396",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginRight:5
  },
  ButtonText:{
    fontSize:20,
    color:"white"
  },
  termsText:{
    color:"#989595",
    textAlign:"center"
  },
  orConnectWithText:{
    color:"#989595",
    //paddingBottom:20
  },
  input:{
    width:width-(2*40),
    borderWidth:1,
    marginTop:20,
    borderRadius:10,
    borderColor:"#A7A5A5",
    paddingLeft:10,
    justifyContent:"flex-start"
  },
  inputText:{
    fontSize:16,
    color:"black"
  }

});


//Need validation on email field