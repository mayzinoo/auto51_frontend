//store
export const SET_LOG_IN = "userActionsStore/SET_LOG_In";
export const SET_LOG_OUT = "userActionsStore/SET_LOG_OUT";
export const SET_MINIMIZESIDEBAR = "minimize/SET_MINIMIZESIDEBAR";
export const SET_GET_USER_API = "store/SET_GET_USER_API";

//actions
export const setLogin = (GetLogin) => ({
  type: SET_LOG_IN,
  GetLogin,
});

export const setLogout = () => ({
  type: SET_LOG_OUT,
});

export const setMinimize = (GetMinimize) => ({
  type: SET_MINIMIZESIDEBAR,
  GetMinimize,
});

export const setGetUserApi = (GetUserApi) => ({
  type: SET_GET_USER_API,
  GetUserApi,
});

//initialState
const INITIAL_STATE = {
  GetLogin: false,
  GetMinimize: false,
  GetUserApi: null,
};

//reducers
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOG_IN:
      return {
        ...state,
        GetLogin: action.GetLogin,
      };
    case SET_MINIMIZESIDEBAR:
      return {
        ...state,
        GetMinimize: action.GetMinimize,
      };
    case SET_GET_USER_API:
      return {
        ...state,
        GetUserApi: action.GetUserApi,
      };
      case SET_LOG_OUT:
      return INITIAL_STATE;
    default:
  }
  return state;
}
