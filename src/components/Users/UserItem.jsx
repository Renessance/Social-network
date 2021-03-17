import React from 'react';
import style from "./Users.module.css";
import userPhoto from "./../../assets/images/profile.png"
import {NavLink} from "react-router-dom";

let UserItem = ({user, setUnFollowThunk, setFollowThunk, followingInProgress}) => {
    return (
        <div>
            <div>
                <div className={style.status}>
                    <p>Status: {user.status || '------------'}</p>
                </div>
                <div className={style.info}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null
                            ? user.photos.small
                            : userPhoto} alt=""/> </NavLink>
                    <p>{user.name}</p>
                </div>
                <div className={style.follow}>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    setUnFollowThunk(user.id);
                                }}>unfollow</button> :

                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    setFollowThunk(user.id);
                                }}>follow</button>
                    }
                </div>
            </div>
            <div>
                <div>{user.status}</div>
            </div>
        </div>

    );
}

export default UserItem;