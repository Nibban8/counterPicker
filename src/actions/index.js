import jsonPlaceholder from '../apis/jsonPlaceholder';

import {
    ADD_VOTE, 
    EDIT_VOTE,
    FETCH_VOTES
} from './types';


export const signIn = (userId) => {

    return{
        type: 'SIGN_IN',
        payload: userId
    };
};

export const signOut = () => {

    return{
        type: 'SIGN_OUT'
    };
};



export const fetchChars = ()  => {

    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/chars');
        dispatch({type: 'FETCH_CHARS', payload: response.data})
    }  
};

 export const fetchVotes = () => {

    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/votes');
        dispatch({type: FETCH_VOTES , payload: response.data})
    }  

};

export const editVote = (id, voteValue) => async (dispatch , getState) => {
    const {userId} = getState().auth;
    const response = await jsonPlaceholder.put(`/votes/${id}/`, {...voteValue , userId})

    dispatch({type: EDIT_VOTE, payload: response.data})

}

export const addVote = (newVote) => async (dispatch , getState) => {
    const {userId} = getState().auth;
    const response = await jsonPlaceholder.post(`/votes/`, {...newVote, userId})
    dispatch({type: ADD_VOTE, payload: response.data});
   
}


export const select = (char) => async(dispatch) => {
    dispatch({type: 'SELECT' , payload: char});
}




