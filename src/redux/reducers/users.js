export const types = {
  GET_USERS_BEGINS: 'users/GET_USERS_BEGINS',
  GET_USERS_SUCCESS: 'users/GET_USERS_SUCCESS',
  GET_USERS_ERROR: 'users/GET_USERS_ERROR',
};

export const initialState = {
  getUsersFetching: false,
  getUsersSuccess: null,
  getUsersError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_BEGINS: {
      return {
        ...state,
        getUsersFetching: true,
        getUsersSuccess: null,
        getUsersError: null,
      };
    }
    case types.GET_USERS_SUCCESS: {
      return {
        ...state,
        getUsersFetching: false,
        getUsersSuccess: action.usersList,
        getUsersError: null,
      };
    }
    case types.GET_USERS_ERROR: {
      return {
        ...state,
        getUsersFetching: false,
        getUsersSuccess: null,
        getUsersError: action,
      };
    }

    default:
      return { ...state };
  }
};

export const actions = {
  // GET USER CLIENTS
  getUsers: () => ({
    type: types.GET_USERS_BEGINS,
  }),
  successGetUsers: (usersList) => ({
    type: types.GET_USERS_SUCCESS,
    usersList,
  }),
  errorGetUsers: (error) => ({
    type: types.GET_USERS_ERROR,
    payload: error,
  }),
};

export default userReducer;
