import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Alert,Switch, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import {store} from '../../redux/store';
import { facebookLogin, googleLogin, validateUser, navigateToMainApp,changeRole } from '../../redux/actions/auth_actions'
import Loading from '../common/loading'

const mapStateToProps = (state)=>{
  //console.log(state.firebaseReducer.auth.providerData)
  return{
    isOrganizer:state.authReducer.isOrganizer,
  };
}

class Start extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:this.props.isOrganizer?require("../../assets/organizerBG.png"):require("../../assets/travellerBG.png"),
      isLoading:false
    }
}
 
componentDidUpdate(prevProps){
  if(prevProps.isOrganizer !== this.props.isOrganizer){
    this.setState({
      currentUser:this.props.isOrganizer?require("../../assets/organizerBG.png"):require("../../assets/travellerBG.png")  
    })
  }
}

switchAccountType = ()=>{
  store.dispatch(changeRole(!this.props.isOrganizer))
}

facebookLogin = async ()=>{
    try {
        await facebookLogin()
        this.setState({isLoading:true})
        var profileExists = await store.dispatch(validateUser(this.props.isOrganizer))
        if(profileExists){
            //go to main app
            store.dispatch(navigateToMainApp())
            this.setState({isLoading:false})
        }
        else{
            //go to signup
            this.setState({isLoading:false})
            this.props.navigation.navigate("CreateAccount",{isSocialAccount:true})

        }    
    } catch (error) {
      this.setState({isLoading:false})
      alert(error)
    }
    
}

googleLogin = async()=>{
    try {
        await googleLogin()
        this.setState({isLoading:true})
        var profileExists = await store.dispatch(validateUser(this.props.isOrganizer))
        if(profileExists){
            //go to main app
            this.setState({isLoading:false})
            store.dispatch(navigateToMainApp())
        }
        else{
            //go to signup
            this.setState({isLoading:false})
            this.props.navigation.navigate("CreateAccount",{isSocialAccount:true})
        }    
    } catch (error) {
      this.setState({isLoading:false})
        alert(error)
    }
    
}

  
  render(){
    return (
      <>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <View style={{flex:1}}>
          <View style={styles.background}>
            <ImageBackground style={styles.backgroundImage} source={this.state.currentUser} >
              <Text style={styles.logoText}>TRIPNIC</Text>
              <Text style={styles.welcomeText}>Welcome</Text>
              <View style={{width:270}}>
                <Text style={styles.welcomeMsg}>
                  {
                    this.props.isOrganizer?
                    'Want to grow your business? Let us help you reaching out tourists':
                    'Why wait? Let us get started to access hot offers on amazing trips'
                    
                  }
                </Text>
              </View>
              <TouchableOpacity onPress={()=>this.props.navigation.push("Auth")} activeOpacity={0.95} style={styles.emailButton}>
                  <Text style={styles.emailButtonText} >{this.props.isOrganizer?"Enter your Bussiness Email":"Enter Your Email Address"}</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.interactionContainer}>
              <Text style={styles.orConnectWithText} >Or connect with</Text>
              <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.fbButton} onPress={this.facebookLogin} >
                  <Text style={styles.socialButtonText} >Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.googleButton} onPress={this.googleLogin} >
                  <Text style={styles.socialButtonText} >Google</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:300,paddingVertical:20}}>
                <Text style={styles.termsText}>{`By proceeding you agree to Tripnic's Privacy Policy, User Agreement and Terms of Service`}</Text>
              </View>
              <ImageBackground style={styles.switchContainer} source={this.state.currentUser} >
                <View style={styles.switchTextContainer}>
                  <Text style={styles.switchText}>Traveller</Text>
                </View>
                <View style={styles.container}>
                  <Switch
                    thumbColor="white"
                    trackColor={{true:"rgba(255,255,255,0.3)",false:"rgba(255,255,255,0.3)"}}
                    value={this.props.isOrganizer}
                    onValueChange={this.switchAccountType}
                    />
                </View>
                <View style={styles.switchTextContainer}>
                <Text style={styles.switchText} >Organizer</Text>
                </View>
              </ImageBackground>
            
          </View>
          <Loading visible={this.state.isLoading} />
        </View>
        {/* <View style={styles.container}>
          <Text>{this.props.isOrganizer?"Organizer Auth":"Traveller Auth"}</Text>
          <Button title="fb login" onPress={this.facebookLogin}></Button>
          <Button title="google login" onPress={this.googleLogin}></Button>
          <Button title="Enter your email" onPress={()=>this.props.navigation.push("Auth")}></Button>
          <Switch
          value={this.props.isOrganizer}
          onValueChange={this.switchAccountType}
          />
        </View> */}
      </>
    );
  }
};


export default connect(mapStateToProps)(Start)

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  background:{
    flex:6
  },
  backgroundImage:{
    flex: 1,
    resizeMode: "cover",
    alignItems:"center",
    justifyContent:"flex-end"
  },
  interactionContainer:{
    flex:5,
    justifyContent:"flex-end",
    alignItems:"center"
  },
  switchContainer:{
    height:50,
    flexDirection:"row"
  },
  switchText:{
    color:"white",
    fontSize:18
  },
  switchTextContainer:{
    flex:3,
    alignItems:'center',
    justifyContent:'center',
  },
  logoText:{
    fontSize:50,
    color:"white",
  },
  welcomeText:{
    paddingTop:30,
    fontSize:30,
    color:"white",
  },
  welcomeMsg:{
    paddingTop:30,
    paddingBottom:20,
    fontSize:17,
    color:"white",
    textAlign:"center"
  },
  emailButton:{
    marginBottom:-24,
    height:50,
    width:300,
    backgroundColor:"white",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    elevation:4,
    
  },
  emailButtonText:{
    
    fontSize:20,
    color:"#979292"
  },
  socialButtonsContainer:{
    flexDirection:"row",
    justifyContent:"center",
    paddingBottom:30
   
  },
  googleButton:{
    backgroundColor:"#DD4B39",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginLeft:10
  },
  fbButton:{
    backgroundColor:"#3B5998",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginRight:10
  },
  socialButtonText:{
    fontSize:20,
    color:"white"
  },
  termsText:{
    color:"#989595",
    textAlign:"center"
  },
  orConnectWithText:{
    color:"#989595",
    paddingBottom:20
  }

});

