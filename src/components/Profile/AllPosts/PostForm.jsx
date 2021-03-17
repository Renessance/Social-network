import React from "react";
import {Field} from "react-final-form";


const PostForm = (props) => {
    return (
        <form
            onSubmit={props.handleSubmit}>
            <div>
                <Field name="sendPost">
                    {({ input, meta }) => (
                        <div>
                            <textarea {...input} placeholder="Send post" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
            </div>
            <div>
                <button disabled={props.pristine || props.submitting}>Add</button>
            </div>
        </form>
    );
}

export default PostForm;