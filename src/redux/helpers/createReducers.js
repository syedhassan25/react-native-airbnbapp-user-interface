export default function createReducers(initialState,handlers){
    return function reducers(state = initialState , action){
        if(handlers.hasOwnProperty(action.type)){
            return handlers[action.type](state,action)
        }
        return state;
    }
}