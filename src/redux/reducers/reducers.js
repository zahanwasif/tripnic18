import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";


const AuthInitialState = {
  isOrganizer:null,
  userProfile:null,
  isLoggedIn:false
};





const authReducer = (state = AuthInitialState, action) => {
  if(action.type === "NewUserCreated"){
    return{...state,userProfile:action.userProfile}
  }
  else if(action.type === "ProfileFetched"){
    return{...state,userProfile:action.userProfile}
  }
  else if(action.type === "ProfileFetchedOnStart"){
    return{...state,userProfile:action.userProfile,isOrganizer:action.isOrganizer}
  }
  else if(action.type === "Signout"){
    return{...state,userProfile:null,isLoggedIn:false}
  }
  else if(action.type === "Login"){
    return{...state,isLoggedIn:true}
  }
  else if(action.type === "changeRole"){
    return{...state,isOrganizer:action.role}
  }
  else{
    return state
  }
}
export default combineReducers({
  firebaseReducer,
  authReducer
});