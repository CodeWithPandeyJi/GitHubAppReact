const githubReducer =(currentState,action) => {

    switch(action.type){
        case "GET_USERS" :

            return {
                ...currentState,
                users: action.payload,
                loading: false,
            };

        case "SET_LOADING" :
            return {
                ...currentState,
                loading: action.payload, //true;
            };

        case "CLEAR_USERS" :
            return {
                ...currentState,
                users: [],
            };
        
        case "GET_USER" :

            return {
                ...currentState,
                user:action.payload,
                loading: false,
            };

        case "GET_REPOS":
            return {
                  ...currentState,
                  repos: action.payload,
                  loading: false,
            };
        
        case "SET_TOKENEXPIRY" :
            return {
                ...currentState,
                loading: false,
                tokenexpired: action.payload, //true;
            };
        default :
            return currentState;
    }

};

export default githubReducer;