import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./src/reducer/reducer";
import { fetchPeople } from "./src/action/peopleAction";
import App from "./App";
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

import "./index.css";
import "./semantic-dist/semantic.min.css";

class Index extends React.Component {
    componentDidMount() {
        store.dispatch(fetchPeople());
    }
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
