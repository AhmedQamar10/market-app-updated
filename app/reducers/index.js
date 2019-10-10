import { combineReducers } from "redux";

const initialState = {
  info: null
};
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        info: action.info
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  getCategories: categoriesReducer,
});

export default rootReducer;
