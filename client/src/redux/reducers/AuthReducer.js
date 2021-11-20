import isEmpty from "../../common/isEmpty";
import { SET_USER } from "../types";

const initialState = {
  authenticate: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authenticate: !isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
}
