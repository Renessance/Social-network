import React from "react";
import s from "../Profile/AllPosts/AllPosts.module.css";
import {Field} from "react-final-form";

const DialogForm = (props) => {
    return (
        <form className="add_message" onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder='Send message' name="sendMessage" component="textarea"/>
            </div>
            <div className={s.wrapper_button}>
                <button disabled={props.pristine || props.submitting} onClick={props.form.rest}>Add</button>
            </div>
        </form>
    );
}

export default DialogForm;