export const types = {
  LOGIN_USER_BEGINS: 'auth/LOGIN_USER_BEGINS',
  LOGIN_USER_SUCCESS: 'auth/LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR: 'auth/LOGIN_USER_ERROR',

  LOGOUT_USER: 'auth/LOGOUT_USER',
};

export const initialState = {
  loginUserFetching: false,
  loginUserSuccess: false,
  loginUserError: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN USER
    case types.LOGIN_USER_BEGINS: {
      return {
        ...state,
        loginUserFetching: true,
        loginUserSuccess: false,
        loginUserError: null,
        token: null,
      };
    }
    case types.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginUserFetching: false,
        loginUserSuccess: !!action.authToken,
        loginUserError: null,
        token: action.authToken,
      };
    }
    case types.LOGIN_USER_ERROR: {
      return {
        ...state,
        loginUserFetching: false,
        loginUserSuccess: false,
        loginUserError: action.error,
        token: null,
      };
    }
    // LOGOUT USER
    case types.LOGOUT_USER: {
      return {
        ...state,
        loginUserFetching: false,
        loginUserSuccess: false,
        loginUserError: null,
        token: null,
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
    type: types.LOGOUT_USER,
  }),
};

export default authReducer;
