import {authApi, securityAPI, usersApi} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO';
const DISPLAY_ERROR = 'auth/DISPLAY_ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    usedId: null,
    login: null,
    email: null,
    isAuth: false,
    photos: '',
    captchaUrl: null,
    error: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }

        case SET_USER_PHOTO:
            return {...state, photos: action.photos}

        case DISPLAY_ERROR:
            return {...state, error: action.error}

        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, captchaUrl: action.captchaUrl}

        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {id, login, email, isAuth}});
export const setAuthUserPhoto = (photos) => ({type: SET_USER_PHOTO, photos});
export const displayError = (error) => ({type: DISPLAY_ERROR, error});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl});

export const authMeThunk = () => async (dispatch) => {
    let data = await authApi.authMe(),
        {id, login, email} = data.data;

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(id, login, email, true))
    }

    let dataPhoto = await usersApi.getUser(id);

    dispatch(setAuthUserPhoto(dataPhoto.photos));

}

export const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const LoginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha);

    if (response === 0) {
        dispatch(authMeThunk());
    }  else {
        if (response.resultCode === 10) {
            dispatch(getCaptcha());
        }

        let message = response.messages[0];
        dispatch(displayError(message));
    }
}

export const logoutThunk = () => async (dispatch) => {
    await authApi.logout();
    dispatch(setAuthUserData(null, null, null, false));
}

export default authReducer;

