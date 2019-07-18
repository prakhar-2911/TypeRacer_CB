import * as actionTypes from './actionTypes';



export const isMatch = (keyCount) => {
    return {
        type: actionTypes.IS_TEXT_MATCH
    }
}

export const isNotMatch = () => {
    return {
        type: actionTypes.IS_TEXT_NOT_MATCH    
    }
}

export const initTime = () => {
return {
    type: actionTypes.INIT_TIME
}
}

export const gameOver = () => {
return {
    type: actionTypes.GAME_OVER
}
}

export const setWpm = (wpm) => {
    return {
        type: actionTypes.SET_WPM,
        wpm: wpm
}
}

export const countdown = () => {
return {
    type: actionTypes.COUNTDOWN
}
}