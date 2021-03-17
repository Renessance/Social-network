import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state =   {
    postsData: [
        {id: 1, post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", likesCount: 10},
        {id: 2, post: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden", likesCount: 5},
    ],
};

it('length pos must be 3 ', () => {
    //1. test data
    let action = addPostActionCreator('test-post')
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.postsData.length).toBe(3);
});

it('message of new post should be "test-post" ', () => {
    //1. test data
    let action = addPostActionCreator('test-post')

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData[2].post).toBe('test-post');
});

it('after deleting length should be decrement ', () => {
    //1. test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData.length).toBe(1);
});

it(`after deleting length shouldn't if id is incorrect`, () => {
    //1. test data
    let action = deletePost(10000000)

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData.length).toBe(2);
});
