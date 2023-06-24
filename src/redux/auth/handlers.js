export const handleRegisterUserFulfilled = (state, {payload}) => {
    state.user = payload.user
    state.isLoggedIn = true;
    state.access_token = payload.token;
    state.error = null;
  }
  
  export const handleLogInFulfilled = (state, {payload}) => {
    state.isLoggedIn = true;
    state.error = null;
    state.access_token = payload.token;
    state.user = payload.user
  }
  
  export const handleLogOutFulfilled = (state) => {
    state.isLoggedIn = false;
    state.error = null;
    state.access_token=null;
    state.user = { name: null, email: null }
  }

  export const handleFetchCurrentUserFulfilled = (state, {payload}) => {
    state.isLoggedIn = true;
    state.error = null;
    state.user = payload
  }

  export const handleError = (state, {payload}) => {
    state.error = payload
    state.isLoggedIn = false;
    state.access_token= null;
    state.user = { name: null, email: null }
  }