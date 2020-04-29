import React from 'react';
import {StyleSheet,View,Dimensions,TextInput,Text,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {store} from '../../redux/store';
import Loading from '../common/loading'
import {emailSignin,validateUser, navigateToMainApp } from '../../redux/actions/auth_actions'
import Icon from 'react-native-vector-icons/Ionicons'
import {StyledButton,Toast,StyledTextInput} from '../../components/styled_components'

const {width} = Dimensions.get('window')

const mapStateToProps = (state)=>{
  return{
    isOrganizer:state.authReducer.isOrganizer,
  };
}

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email:this.props.route.params?.email,        
        password:"",
        isLoading:false,
        msg:"",
        toggleToast:false,
    }
}
  
  
   emailSignin = async()=>{
       try {
            this.setState({isLoading:true})
            await emailSignin(this.state.email,this.state.password)
            var profileExists = await store.dispatch(validateUser(this.props.isOrganizer))
            this.setState({isLoading:false})
            if(profileExists){
                store.dispatch(navigateToMainApp())
            }
            else{
                this.props.navigation.navigate("CreateAccount",{isSocialAccount:false})
            }
       } 
       catch (error) {
        this.setState({isLoading:false})
        this.setState({msg:error},()=>{
          this.setState({toggleToast:true},()=>{
            this.setState({toggleToast:false})
          })
        })
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
              <View style={{justifyContent:"flex-start", width:width, paddingLeft:40,paddingBottom:25}} >
                <Text style={{fontSize:22,fontWeight:"bold"}}>Login</Text>
              </View>
              <StyledTextInput
                  password
                  width={width-70}
                  onChangeText={(password)=>{
                    this.setState({password})
                  }}
                  placeholder="Enter your password"
                />
                <View style={styles.authButtonContainer}>
                  <StyledButton
                    roundEdged 
                    height={40} 
                    fontSize={20} 
                    width={135}
                    title="Login"
                    onPress={this.emailSignin}
                    loading={this.state.isLoading}
                  />
                </View>
            </View>
            <Toast message={this.state.msg} visible={this.state.toggleToast} />
            <Loading visible={this.state.isLoading} />
        </View>
        
      </>
    );
  }
};


export default connect(mapStateToProps)(Login)

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
  },
  iconLeft:{
    height:50,
    paddingLeft:15,
    justifyContent:"center",
    width:width,
  },
  
  authButtonContainer:{
    flexDirection:"row",
    justifyContent:"center",
    paddingVertical:30
   
  },
});

