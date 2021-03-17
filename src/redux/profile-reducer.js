import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';
const DISPLAY_ERROR = 'DISPLAY_ERROR';

let initialState = {
    postsData: [
        {
            id: 1,
            post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            likesCount: 10
        },
        {
            id: 2,
            post: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden",
            likesCount: 5
        },
    ],
    profile: {
        errors: {
            someError: ''
        },
        photos: '',
        currentId: null,
        fullName: '',
        aboutMe: '',
        lookingForAJobDescription: '',
        lookingForAJob: false,
        contacts: {
            facebook: '',
            instagram: '',
            twitter: '',
            github: ''
        },
    },
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: action.postMessage,
                likesCount: 0
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],

            };
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_CURRENT_USER_ID: {
            return {...state, profile: action.currentId};
        }

        case SET_STATUS: {
            return {...state, status: action.status};
        }

        case DELETE_POST: {
            return {...state, postsData: state.postsData.filter(post => post.id !== action.postId)};
        }

        case DISPLAY_ERROR: {
            return {...state.profile, someError: action.errors};
        }

        case SET_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (postMessage) => ({type: ADD_POST, postMessage});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SET_PHOTO_SUCCESS, photos});
export const displayError = (errors) => ({type: DISPLAY_ERROR, errors});

export const getUsersThunk = (userId) => async (dispatch) => {
    let data = await usersApi.getUser(userId)
    dispatch(setUserProfile(data));
}

export const getUsersStatusThunk = (userId) => async (dispatch) => {
    let response = await profileApi.getUserStatus(userId)
    dispatch(setUserStatus(response.data));
}

export const setUsersStatusThunk = (status) => async (dispatch) => {
    await profileApi.setUserStatus(status)
    dispatch(setUserStatus(status));
}

export const saveProfileThunk = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.id;
    let response = await profileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUsersThunk(userId));
    }
}

export const savePhotoThunk = (file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;