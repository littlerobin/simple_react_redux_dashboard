import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleWare.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
