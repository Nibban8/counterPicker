


export default (state = {chars:[] , selected : {}}, action) => {

    switch(action.type){
        case 'FETCH_CHARS':
            return {...state , chars : action.payload}

        case 'SELECT' : 
            return {...state, selected : action.payload}

        default:
            return state;    
    }

}