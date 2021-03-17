import s from './profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import AllPostsContainer from "./AllPosts/AllPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         setStatus={props.setStatus}
                         savePhotoThunk={props.savePhotoThunk}
                         saveProfileThunk={props.saveProfileThunk}
                         errors={props.errors}
            />
            <AllPostsContainer  />
        </div>
    );
}

export default Profile;