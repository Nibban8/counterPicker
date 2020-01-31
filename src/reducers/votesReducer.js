import {
    ADD_VOTE,
    EDIT_VOTE 
} from '../actions/types'

export default (state = [], action) => {

    switch(action.type){
        case 'FETCH_VOTES':
            return action.payload


        case ADD_VOTE:

            return {...state, [action.payload.id] : action.payload}

        case EDIT_VOTE:

            return {...state, [action.payload.id] : action.payload}

        default:
            return state;    
    }

}