import isEmpty from "../../common/isEmpty";
import { USER_PROFILE } from "../types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_PROFILE:
      return action.payload

    default:
      return state;
  }
}
