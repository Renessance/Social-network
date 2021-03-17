import {usersApi} from "../api/api";
import {upDateObjectInArray} from "../components/utils/object-helper";

const FOLLOW = true;
const UNFOLLOW = false;
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const USERS_COUNT = 'users/USERS_COUNT';
const TOGGLE_IN_PROGRESS = 'users/TOGGLE_IN_PROGRESS';
const TOGGLE_FOLLOWING_IS_PROGRESS = 'users/TOGGLE_FOLLOWING_IS_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isProgress: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: upDateObjectInArray(state.users, action.userId, "id", {followed: true})
            };

        case UNFOLLOW:
            return {
                ...state,
                users: upDateObjectInArray(state.users, action.userId, "id", {followed: false})
            };

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case USERS_COUNT: {
            return {...state, totalUsersCount: action.usersCount}
        }
        case TOGGLE_IN_PROGRESS: {
            return {...state, isProgress: action.isProgress}
        }
        case TOGGLE_FOLLOWING_IS_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (usersCount) => ({type: USERS_COUNT, usersCount});
export const setIsProgress = (isProgress) => ({type: TOGGLE_IN_PROGRESS, isProgress});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IS_PROGRESS,
    isFetching,
    userId
});

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsProgress(true));
    dispatch(setCurrentPage(currentPage))

    let data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(setIsProgress(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);

    if (data === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const setFollowThunk = (userId) => async (dispatch) => {
    let apiMethod = usersApi.setFollow.bind(usersApi);

    await followUnfollowFlow(dispatch, userId, apiMethod, follow)
}

export const setUnFollowThunk = (userId) => async (dispatch) => {
    let apiMethod = await usersApi.setUnFollow.bind(usersApi);

    await followUnfollowFlow(dispatch, userId, apiMethod, unfollow)
}


export default usersReducer;