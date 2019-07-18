import * as actionTypes from './actionTypes';
import axios from 'axios';


const processData = (dataToSplit) => {
    let formattedString = dataToSplit.replace(new RegExp("<p>",'g'),"").replace(new RegExp("</p>",'g'),"");
    return formattedString;
} 

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    }
}

export const fetchFail = (error) => {
return {
    type: actionTypes.FETCH_FAIL,
    data : error    
}
}

export const fetchSuccess = (data) => {
    return {
        type : actionTypes.FETCH_SUCCESS,
        data : data
    }
}

export const fetch = () => {
    return dispatch => {
        dispatch(fetchStart());

        const URL = 'http://www.randomtext.me/api/';

        axios.get(URL)
        .then(response => {
            let formattedData = processData(response.data.text_out);
            dispatch(fetchSuccess(formattedData));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        });
    }
}