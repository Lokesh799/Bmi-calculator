import { SET_DATA } from "../action/index";

const initialState = {
  setdata: {
    weight: '',
    height: '',
    date: ''
  }
}

export const setData = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        setdata: action.payload,
      };

    default:
      return state;
  }
}
