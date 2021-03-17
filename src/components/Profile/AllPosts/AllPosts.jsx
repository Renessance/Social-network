import style from './AllPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const AllPosts = React.memo(props => {

    let postsElements = props.allPost.map(post => <Post avatar={props.photo}
                                                        fullname={props.fullName}
                                                        key={post.id}
                                                        post={post.post}
                                                        likes={post.likesCount}
    />)

    return (
        <div className={style.posts}>
            <h3>My post</h3>
            {postsElements}
        </div>
    );
})

export default AllPosts;