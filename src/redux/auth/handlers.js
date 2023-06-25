export const handleRegisterUserFulfilled = (state, {payload}) => {
    state.user = payload.user
    state.isLoggedIn = true;
    state.access_token = payload.token;
    state.error = null;
    state.authInProgress = false;
  }
  
  export const handleLogInFulfilled = (state, {payload}) => {
    state.isLoggedIn = true;
    state.error = null;
    state.access_token = payload.token;
    state.user = payload.user
    state.authInProgress = false;
  }
  
  export const handleLogOutFulfilled = (state) => {
    state.isLoggedIn = false;
    state.error = null;
    state.access_token=null;
    state.user = { name: null, email: null }
    state.authInProgress = false;
  }

  export const handleFetchCurrentUserFulfilled = (state, {payload}) => {
    state.isLoggedIn = true;
    state.error = null;
    state.user = payload
    state.authInProgress = false;
  }

  export const handleError = (state, {payload}) => {
    state.error = payload
    state.isLoggedIn = false;
    state.access_token= null;
    state.user = { name: null, email: null }
    state.authInProgress = false;
  }

  export const handlePending = (state) => {
    state.authInProgress = true;
  }