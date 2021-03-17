const ADD_NEW_MESSAGE = 'profile/ADD-NEW-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: "Lorem ipsum bla bla"},
        {id: 2, message: "Lorem ipsum bla bla"},
        {id: 3, message: "Lorem ipsum bla bla"},
        {id: 4, message: "Lorem ipsum bla bldasdaa"}
    ],
    dialogsData: [
        {id: 1, name: "Person 1"},
        {id: 2, name: "Person 2"},
        {id: 3, name: "Person 3"},
        {id: 4, name: "Person 4"},
        {id: 5, name: "Person 5"}
    ],
    objMessage: 'New message'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    {
                        id: 6,
                        message: action.message
                    }
                ]
            };
        default:

            return state;
    }
}

export const addMassageAction = (message) => {
    return {type: ADD_NEW_MESSAGE, message}
}

export default dialogsReducer;