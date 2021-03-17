import {authMeThunk} from "./auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => async (dispatch) => {

    let promise = dispatch(authMeThunk());

    await Promise.all([promise])
    dispatch(setInitializedSuccess())

}

export default appReducer;

