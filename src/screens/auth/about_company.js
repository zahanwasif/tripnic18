import React from 'react'
import {StyleSheet,View,Dimensions,TextInput,Text,TouchableOpacity} from 'react-native';
import {store} from '../../redux/store';
import {addCompanyInfo,navigateToMainApp} from '../../redux/actions/auth_actions'
import Loading from '../common/loading'
import Icon from 'react-native-vector-icons/Ionicons'

const {width} = Dimensions.get('window')

export default class AboutCompany extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            companyName:"",
            about:"",
            isLoading:false,
        }
    }

    AddCompanyInfo = async ()=>{
        try {
            this.setState({isLoading:true})
            await store.dispatch(addCompanyInfo(this.state.companyName,this.state.about))
            this.setState({isLoading:false})
            //this.props.navigation.navigate("SocialLinks")
            store.dispatch(navigateToMainApp())
        } catch (error) {
            console.log(error)
        }
    }
    
    render(){
        return(
            <View style={styles.container} >
          <View style={styles.iconLeft} >
            <Icon onPress={()=>this.props.navigation.goBack()} name="ios-arrow-round-back" size={40} />
          </View>
          <View style={styles.interactionContainer}>
            <View style={{justifyContent:"flex-start", width:width, paddingLeft:40}} >
              <Text style={{fontSize:22,fontWeight:"bold"}}>Company Info</Text>
            </View>
            <View style={styles.input} >
              <TextInput style={styles.inputText} 
              onChangeText={(companyName)=>{
                this.setState({companyName})
              }}
              placeholder="Enter Company Name" />
            </View>
            <View style={styles.inputMultiline} >
              <TextInput style={styles.inputTextMultiline}
                multiline 
                onChangeText={(about)=>{
                    this.setState({about})
                }}
                placeholder="About Your Company (max 500 words)" />
            </View>
            <View style={styles.authButtonContainer}>
                <TouchableOpacity activeOpacity={0.9} style={styles.organizerLoginButton
                  } onPress={this.AddCompanyInfo} >
                  <Text style={styles.ButtonText} >Add Info</Text>
                </TouchableOpacity>
              </View>
           
          </View>
          <Loading visible={this.state.isLoading} />
        </View>
            // <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            //     <Text>Add Company Info</Text>
            //     <TextInput onChangeText={(name)=>this.setState({companyName:name})} placeholder="Company Name" />
            //     <TextInput multiline onChangeText={(about)=>this.setState({about:about})} placeholder="Company About" />
            //     <Button title="Add Company Info" onPress={this.AddCompanyInfo} />
            //     <Loading visible={this.state.isLoading} />
            // </View>
        )
    }
}

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
    inputMultiline:{
        width:width-(2*40),
        borderWidth:1,
        marginTop:20,
        borderRadius:10,
        borderColor:"#A7A5A5",
        paddingLeft:10,
        justifyContent:"flex-start",
        height:200
    },
    inputText:{
      fontSize:16,
      color:"black"
    },
    inputTextMultiline:{
        fontSize:16,
      color:"black",
      textAlignVertical:"top"
    }
})  