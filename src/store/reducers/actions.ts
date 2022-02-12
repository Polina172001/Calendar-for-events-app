import { AuthActionCreators } from "./auth/action";
import { EventActionCreators } from "./event/action";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
