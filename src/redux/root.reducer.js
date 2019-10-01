import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import CommonModuleReducer from "./common/common.module.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loggedInDetails"]
};

const rootReducer = combineReducers({
  ...CommonModuleReducer
});

export default persistReducer(persistConfig, rootReducer);
