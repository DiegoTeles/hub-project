import { TransactionTypes } from "./types";

const INITIAL_STATE = {
  data: [],
  error: "",
  loading: true,
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TransactionTypes.SYSTEM:
      console.log("Depois no Reducer", action.type);
      return {
        ...state,
      };
      
    case TransactionTypes.SYSTEM_SUCCESS:
      console.log(
        "Depois no Reducer com o sucesso populando a store",
        action.type,
      );

      return {
        ...state,
        data: action.payload || undefined,
        loading: false,
      };

    case TransactionTypes.SYSTEM_FAILURE:
      return {
        ...state,
        data: INITIAL_STATE,
        error: action.payload,
      };

    case TransactionTypes.CLEAR_STATUS:
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
