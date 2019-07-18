import * as actionTypes from '../actions/actionTypes';
import {updateObject}  from "../../utililty";




const initialState = {
    data : null,
    loading : false
}

const fetchStart = (state) => {
return updateObject(state, {loading: true}); 
}

const fetchSuccess = (state, data) => {
return updateObject(state, {
    data: data,
    loading: false
});
}

const fetchFail = (state, error) => {
return updateObject(state, {
    error : error,
    loading: false
})
}


const reducer = (state=initialState, action) => {
switch(action.type){
    case actionTypes.FETCH_START : 
        return fetchStart(state);
    case actionTypes.FETCH_SUCCESS :
        return fetchSuccess(state, action.data);
    case actionTypes.FETCH_FAIL :
        return fetchFail(state, action.error);     
    default: 
        return state;               
}
}

export default reducer;



