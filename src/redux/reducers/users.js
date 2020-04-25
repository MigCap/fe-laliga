export const types = {
  GET_USERS_BEGINS: 'users/GET_USERS_BEGINS',
  GET_USERS_SUCCESS: 'users/GET_USERS_SUCCESS',
  GET_USERS_ERROR: 'users/GET_USERS_ERROR',

  GET_USER_DETAIL_BEGINS: 'users/GET_USER_DETAIL_BEGINS',
  GET_USER_DETAIL_SUCCESS: 'users/GET_USER_DETAIL_SUCCESS',
  GET_USER_DETAIL_ERROR: 'users/GET_USER_DETAIL_ERROR',

  DELETE_USER_BEGINS: 'users/DELETE_USER_BEGINS',
  DELETE_USER_SUCCESS: 'users/DELETE_USER_SUCCESS',
  DELETE_USER_ERROR: 'users/DELETE_USER_ERROR',

  UPDATE_USER_DETAIL_BEGINS: 'users/UPDATE_USER_DETAIL_BEGINS',
  UPDATE_USER_DETAIL_SUCCESS: 'users/UPDATE_USER_DETAIL_SUCCESS',
  UPDATE_USER_DETAIL_ERROR: 'users/UPDATE_USER_DETAIL_ERROR',
};

export const initialState = {
  getUsersFetching: false,
  getUsersSuccess: null,
  getUsersError: null,

  getUserDetailFetching: false,
  getUserDetailSuccess: null,
  getUserDetailError: null,

  deleteUserFetching: false,
  deleteUserSuccess: null,
  deleteUserError: null,

  updateUserDetailFetching: false,
  updateUserDetailSuccess: null,
  updateUserDetailError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET USERS
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
        getUsersError: action.error,
      };
    }
    // GET USER DETAIL
    case types.GET_USER_DETAIL_BEGINS: {
      return {
        ...state,
        getUserDetailFetching: true,
        getUserDetailSuccess: null,
        getUserDetailError: null,
      };
    }
    case types.GET_USER_DETAIL_SUCCESS: {
      return {
        ...state,
        getUserDetailFetching: false,
        getUserDetailSuccess: action.userDetail,
        getUserDetailError: null,
      };
    }
    case types.GET_USER_DETAIL_ERROR: {
      return {
        ...state,
        getUserDetailFetching: false,
        getUserDetailSuccess: null,
        getUserDetailError: action.error,
      };
    }
    // DELETE USER
    case types.DELETE_USER_BEGINS: {
      return {
        ...state,
        deleteUserFetching: true,
        deleteUserSuccess: null,
        deleteUserError: null,
      };
    }
    case types.DELETE_USER_SUCCESS: {
      return {
        ...state,
        deleteUserFetching: false,
        deleteUserSuccess: action.isUserDeleted,
        deleteUserError: null,
      };
    }
    case types.DELETE_USER_ERROR: {
      return {
        ...state,
        deleteUserFetching: false,
        deleteUserSuccess: null,
        deleteUserError: action.error,
      };
    }
    // UPDATE USER DETAIL
    case types.UPDATE_USER_DETAIL_BEGINS: {
      return {
        ...state,
        updateUserDetailFetching: true,
        updateUserDetailSuccess: null,
        updateUserDetailError: null,
      };
    }
    case types.UPDATE_USER_DETAIL_SUCCESS: {
      return {
        ...state,
        updateUserDetailFetching: false,
        updateUserDetailSuccess: action.isUserUpdated,
        updateUserDetailError: null,
      };
    }
    case types.UPDATE_USER_DETAIL_ERROR: {
      return {
        ...state,
        updateUserDetailFetching: false,
        updateUserDetailSuccess: null,
        updateUserDetailError: action.error,
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

  // GET USER DETAIL
  getUserDetail: (userId) => ({
    type: types.GET_USER_DETAIL_BEGINS,
    userId,
  }),
  successGetUserDetail: (userDetail) => ({
    type: types.GET_USER_DETAIL_SUCCESS,
    userDetail,
  }),
  errorGetUserDetail: (error) => ({
    type: types.GET_USER_DETAIL_ERROR,
    payload: error,
  }),

  // DELETE USER
  deleteUser: (userId) => ({
    type: types.DELETE_USER_BEGINS,
    userId,
  }),
  successDeleteUser: (isUserDeleted) => ({
    type: types.DELETE_USER_SUCCESS,
    isUserDeleted,
  }),
  errorDeleteUser: (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error,
  }),

  // UPDATE USER DETAIL
  updateUserDetail: (userId, userData) => ({
    type: types.UPDATE_USER_DETAIL_BEGINS,
    userData,
    userId,
  }),
  successUpdateUserDetail: (isUserUpdated) => ({
    type: types.UPDATE_USER_DETAIL_SUCCESS,
    isUserUpdated,
  }),
  errorUpdateUserDetail: (error) => ({
    type: types.UPDATE_USER_DETAIL_ERROR,
    payload: error,
  }),
};

export default userReducer;
