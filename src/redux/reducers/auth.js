export const types = {
  LOGIN_USER_BEGINS: 'auth/LOGIN_USER_BEGINS',
  LOGIN_USER_SUCCESS: 'auth/LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR: 'auth/LOGIN_USER_ERROR',

  LOGOUT_USER_BEGINS: 'auth/LOGOUT_USER_BEGINS',
  LOGOUT_USER_SUCCESS: 'auth/LOGOUT_USER_SUCCESS',
  LOGOUT_USER_ERROR: 'auth/LOGOUT_USER_ERROR',
};

export const initialState = {
  loginUserFetching: false,
  loginUserSuccess: null,
  loginUserError: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN USER
    case types.LOGIN_USER_BEGINS: {
      return {
        ...state,
        loginUserFetching: true,
        loginUserSuccess: null,
        loginUserError: null,
        isAuthenticated: false,
      };
    }
    case types.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginUserFetching: false,
        loginUserSuccess: action.authToken,
        loginUserError: null,
        isAuthenticated: !!action.authToken,
      };
    }
    case types.LOGIN_USER_ERROR: {
      return {
        ...state,
        loginUserFetching: false,
        loginUserSuccess: null,
        loginUserError: action.error,
        isAuthenticated: false,
      };
    }

    default:
      return { ...state };
  }
};

export const actions = {
  // LOGIN USER
  loginUser: (loginData) => ({
    type: types.LOGIN_USER_BEGINS,
    loginData,
  }),
  successLoginUser: (authToken) => ({
    type: types.LOGIN_USER_SUCCESS,
    authToken,
  }),
  errorLoginUser: (error) => ({
    type: types.LOGIN_USER_ERROR,
    payload: error,
  }),

  // LOGOUT USER
  logoutUser: () => ({
    type: types.LOGOUT_USER_BEGINS,
  }),
};

export default authReducer;
