import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { default as ReduxThunk } from "redux-thunk";
// import { logger } from "redux-logger";
import { rootReducer } from "./redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
