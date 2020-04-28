import {
  CHANGE_APP_LOADING_STATE,
  CHANGE_ROLE
} from "./action_types";

const changeRole = (role) => dispatch => {
  dispatch({
    type: CHANGE_ROLE,
    newRole: role
  })
}

const setAppLoading = (loadingState) => dispatch => {
  dispatch({
    type: CHANGE_APP_LOADING_STATE,
    newState: loadingState
  })
}

export {changeRole,setAppLoading}