import React from 'react';
import ReactDOM from 'react-dom';
// import './index1.css';
// import SignUp from "./App1";
// import './index2.css'
import  store  from './app/store';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
// import SignIn from "./App2";
import Basic from "./router"


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Basic/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);