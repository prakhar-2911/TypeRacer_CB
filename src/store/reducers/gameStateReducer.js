import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utililty';


const initialState = {
    gameOver : false,
    correct : true,
    totalTime : 60,
    keyCount : 0,
    startTime : null,
    wpm : 0
}


const matchText = (state) => {
return updateObject(state, {
    correct: true,
    keyCount: state.keyCount+1
});
}



const setWpm = (state, wpm) => {
    return updateObject(state, {
        wpm: wpm
    })
}

const notMatchText = (state) => {
return updateObject(state, {
    correct: false
});
}


const initTime = (state) => {
return updateObject(state, {
    startTime: new Date()
});
}


const countdown = (state) => {
return updateObject(state, {
    totalTime: state.totalTime - 1 
})
}

const gameOver = (state) => {
return updateObject(state, {
    gameOver: true
})
}

const reducer = (state=initialState, action) => {
switch(action.type){
    case actionTypes.IS_TEXT_MATCH:
        return matchText(state);
    case actionTypes.IS_TEXT_NOT_MATCH:
        return notMatchText(state);
    case actionTypes.INIT_TIME:
        return initTime(state);
    case actionTypes.GAME_OVER:
        return gameOver(state);
    case actionTypes.COUNTDOWN:
        return countdown(state);
    case actionTypes.SET_WPM:
        return setWpm(state, action.wpm);                
    default:
        return state;    
}
}


export default reducer;