import React, {useState, useEffect} from "react";
import style from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateMode = () => {
         setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.setStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={style.status}>
            { !editMode &&
            <div>
                <strong>Status: </strong><span onDoubleClick={activateMode}>{props.status || '------------'}</span>
            </div>
            }
            { editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;