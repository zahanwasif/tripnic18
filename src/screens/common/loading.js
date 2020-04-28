import React from 'react'
import {Modal, View} from 'react-native'
import {ProgressBarAndroid} from '@react-native-community/progress-bar-android'

export default Loading = (props)=>{
    return(
        <Modal visible={props.visible} transparent={true} >
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <ProgressBarAndroid/>
            </View>
        </Modal>
    )
}