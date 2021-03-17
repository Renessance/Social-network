import React from 'react';
import style from "./Users.module.css";
import Paginator from "./../common/Paginator/Paginator";
import UserItem from "./UserItem";

let Users = (props) => {
    return (
        <div>
            <Paginator {...props}  />
            {
                props.users.map(u =>
                    <UserItem user={u}
                              followingInProgress={props.followingInProgress}
                              setFollowThunk={props.setFollowThunk}
                              setUnFollowThunk={props.setUnFollowThunk}
                              key={u.id}
                              className={style.user}
                    />
                )
            }
        </div>
    );
}

export default Users;