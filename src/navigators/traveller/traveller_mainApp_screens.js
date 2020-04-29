import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeStack from '../../screens/traveller/home/home_stack'
import ProfileStack from '../../screens/traveller/profile/profile_stack'
import InboxStack from '../../screens/traveller/inbox/inbox_stack'
import NotificationStack from '../../screens/traveller/notification/notification_stack'
import TripsStack from '../../screens/traveller/trips/trips_stack'

const Tab = createMaterialBottomTabNavigator();
//const Tab = createBottomTabNavigator()
const OrganizerMainAppScreens = ()=>{
  return (
    <Tab.Navigator
    
      initialRouteName="Home"
      activeColor="#2BB396"
      inactiveColor="black"
      barStyle={{ backgroundColor: 'white', }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MyTrips"
        component={TripsStack}
        options={{
          
          tabBarIcon: ({ color }) => (
            <Icon name="ios-paper-plane" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxStack}
        options={{
          
          tabBarIcon: ({ color }) => (
            <Icon name="md-chatbubbles" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationStack}
        options={{
          
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={24} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
         
          tabBarIcon: ({ color }) => (
            <Icon name="md-person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default OrganizerMainAppScreens