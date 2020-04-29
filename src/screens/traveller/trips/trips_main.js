import React from 'react'
import {View,Text, Button,Dimensions} from 'react-native'
import { store } from '../../../redux/store'
import { signout } from '../../../redux/actions/auth_actions'
import {StyledButton,StyledTextInput, OTPInput,StyledPicker} from '../../../components/styled_components'
import Icon from 'react-native-vector-icons/Ionicons'
const {width} = Dimensions.get('window')

export default class TripsMain extends React.Component{
    constructor(props){
        super(props)
        this.state={
            genderOptions:[
                "Not Specified",
                "Male",
                "Female",
                "Other",
            ],
            
        }
    }
    SelectGender = (gender)=>{
        console.log(gender)
        //this.setState({gender:gender})
        //console.log(this.state.gender)
      } 

    render(){
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <StyledButton title="Logout" roundEdged height={55} fontSize={25} width={190} onPress={async()=>store.dispatch(signout())}  />
                {/* <StyledButton title="Facebook" roundEdged height={55} backgroundColor="#3B5998" fontSize={25} width={190} LeftIcon={()=>(
                    <Icon name="logo-facebook" size={30} color="white" />
                )}  />
                <StyledButton title="Google" roundEdged height={55} backgroundColor="#DD4B39" fontSize={25} width={190} LeftIcon={()=>(
                    <Icon name="logo-google" size={30} color="white" />
                )}  /> */}
                <StyledTextInput isValid={false} width={width-80} height={50} placeholder="Enter Password" password />
                <Text>My Trips</Text>
                <OTPInput onChangeText={(text)=>console.log(text)} />
                <StyledPicker width={width-80} title="Gender" options={this.state.genderOptions} select={this.SelectGender} />
            </View>
        )
    }
}