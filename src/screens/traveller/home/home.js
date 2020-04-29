import React from 'react'
import {View,Text, FlatList,TouchableHighlight,StyleSheet,ScrollView,Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

const {width} = Dimensions.get('window')

const TourCardMinified = ()=>{
    return(
        <View style={{elevation:5,width:180,height:200,backgroundColor:"white",borderRadius:10}} >
            {/* <View style={{flex:1,backgroundColor:"red"}}>

            </View>
            <View style={{flex:1}}>

            </View> */}
        </View>
    )
}

const HorizondalScrollItems = ()=>{
    return(
        <FlatList
            style={{paddingLeft:5,backgroundColor:"white"}}
            horizontal = {true}
                    ItemSeparatorComponent={() => {
                        return(
                        <View style={{flex:1,width:20}} />
                        )
                    }}
                   showsHorizontalScrollIndicator={false}
                    data={[{title: 'Title Text', key: '1'},
                            {title: 'Title Text', key: '2'},
                            {title: 'Title Text', key: '3'},
                            {title: 'Title Text', key: '4'},
                            {title: 'Title Text', key: '5'},
                            {title: 'Title Text', key: '6'}
                            ]}
                    renderItem={({item, index, separators}) => (
                        <TourCardMinified />
                    )}
                    />
    )
}

const SearchBar = (props)=>{
    return(
        <View style={{width:width,height:80,alignItems:"center",justifyContent:"center"}} >
            <TouchableOpacity 
            onPress={()=>props.navigateToSearch()}
            activeOpacity={0.9}
            style={{
                width:width-40,
                height:50,
                alignItems:"flex-start",
                justifyContent:"center",
                borderRadius:5,
                elevation:5,
                backgroundColor:"white"
                }}>
                <View style={{flex:1,alignItems:"center",justifyContent:"flex-start",flexDirection:"row"}}>
                    <Icon  style={{paddingHorizontal:15}} name="ios-search" size={30} />
                    <Text style={{color:"#989595",fontSize:16}}>Search your favourite places</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    
    navigateToSearch = ()=>{
        this.props.navigation.navigate("Search")
    }

    render(){
        return(
            <>
            <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                <FlatList
                    ListHeaderComponent={()=>{
                        return(
                            <SearchBar navigateToSearch={this.navigateToSearch} />
                        )
                    }}
                    showsVerticalScrollIndicator={false}
                    data={[{title: 'Top Rated', key: '1'},
                            {title: 'Trending', key: '2'},
                            {title: 'Best Offers', key: '3'},
                            ]}
                    renderItem={({item, index, separators}) => (
                        <View >
                            <View style={{height:80,justifyContent:"center"}} >
                                <Text style={{paddingLeft:20,fontSize:30,fontWeight:"bold"}} >{item.title}</Text>
                            </View>
                            <View style={{height:210,justifyContent:"center"}} >
                                <HorizondalScrollItems/>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.key}
                    />
            </View>
            
            </>
        )
    }
}

const styles = StyleSheet.create({
    floatingButton:{
        //width: 60,  
        //height: 60,   
        //borderRadius: 30,            
        //backgroundColor: 'red',                                    
        //position: 'absolute',                                          
        //bottom: 100,                                                    
        //right: 10,
    }

})  