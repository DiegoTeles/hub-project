import { AuthTypes } from "./types";

const INITIAL_STATE = {
  data: null,
  error: "",
  loading: true,
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AuthTypes.AUTH_REQUEST:
      return {
        ...state,
      };
      
    case AuthTypes.AUTH_SUCCESS:
      return {
        ...state,
        data: action.payload || undefined,
        loading: false,
      };

    case AuthTypes.AUTH_FAILURE:
      return {
        ...state,
        data: INITIAL_STATE,
        error: action.payload,
      };

    case AuthTypes.CLEAR_STATUS:
      return {
        ...state,
        updated: false,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
