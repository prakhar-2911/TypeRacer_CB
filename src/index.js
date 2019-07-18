import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import { combineReducers } from 'redux';
import fetchReducer from './store/reducers/fetchReducer';
import gameStateReducer from './store/reducers/gameStateReducer';
//import playerStatsReducer from './store/reducers/playersStatsReducer';
//import timerReducer from './store/reducers/timerReducer';

const rootReducer = combineReducers({
    fetch : fetchReducer,
    gameState: gameStateReducer
});


const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const app = <Provider store={store}>
            <App/>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
