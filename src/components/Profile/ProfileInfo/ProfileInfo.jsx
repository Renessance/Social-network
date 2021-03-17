import style from './ProfileInfo.module.css';
import userPhoto from "./../../../assets/images/profile.png"
import React, {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)
    const onMainAvatarSelected = (e) => {

        if (e.target.files.length) {
            props.savePhotoThunk(e.target.files[0]);
        }
    }

    return (
        <div className={style.infoPerson}>
            <div className={style.imageWrapper}><img src={props.profile.photos.large || userPhoto} alt=""/></div>

            {props.isOwner && <input type="file" onChange={onMainAvatarSelected}/>}

            <ProfileStatusWithHooks status={props.status} setStatus={props.setStatus}/>


            {editMode
                ? <ProfileDataForm goToEditMode={() => {
                    setEditMode(false)
                }} saveProfileThunk={props.saveProfileThunk} {...props}/>
                : <ProfileData goToEditMode={() => {
                    setEditMode(true)
                }} {...props} isOwner={props.isOwner}/>}
        </div>
    );
}

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <button onClick={props.goToEditMode}>Edit Profile</button>}

            <p><strong>Name:</strong> {props.profile.fullName}</p>
            <p><strong>About me:</strong>{props.profile.aboutMe}</p>
            <p><strong>Looking for a job</strong> {props.profile.lookingForAJob ? "Yes" : 'No'}</p>

            {props.profile.lookingForAJob &&
            <p><strong>My professional skills</strong> {props.profile.lookingForAJobDescription}</p>
            }

            <div><strong>Contact: </strong> {Object.keys(props.profile.contacts).map(key => {
                if (props.profile.contacts[key]) {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                }
            })}</div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><strong>{contactTitle} :</strong> <a href={contactValue}>{contactValue}</a></div>
}

export default ProfileInfo;
