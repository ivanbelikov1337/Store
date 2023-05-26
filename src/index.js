import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import {applyMiddleware, compose, createStore} from "redux";
import rootReducers from "./Redux/RootReducers/rootReducers";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";


const store = createStore(rootReducers, compose(
    applyMiddleware(thunk))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
