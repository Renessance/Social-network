import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '23b10ac7-4e95-4372-a1f2-4f9e78723416'}
});

//Query to api
export const usersApi = {
    getUsers(pageNumber = 1, pageSize = 5) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    getUser(userId = 2) {
        return profileApi.getUser(userId);
    },

    setUnFollow(userId = 1) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    },

    setFollow(userId = 1) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data.resultCode;
            });
    }
}

export const profileApi = {
    getUser(userId = 2) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    setUserStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    },

    savePhoto(file) {
        let formData = new FormData();
        formData.append("image", file);

        return instance.put(`profile/photo`, formData, {
        });
    }
}

export const authApi = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },

    login(email, password, rememberMe, captcha) {
        return instance.post(`auth/login/`, {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(response => {
                return response.data;
            });
    },

    logout() {
        return instance.delete(`auth/login/`)
            .then(response => {
                return response.data.resultCode;
            })
    },
}


export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data;
            });
    },

}
