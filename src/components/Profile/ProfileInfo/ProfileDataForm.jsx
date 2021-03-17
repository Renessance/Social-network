import style from "./ProfileInfo.module.css";
import React from "react";
import {Form, Field} from 'react-final-form'

const ProfileDataForm = (props) => {
    return (
        <div>
            <Form
                onSubmit={(formData) => {
                    props.saveProfileThunk(formData)
                    props.goToEditMode()
                }}

                initialValues={props.profile}
                render={({
                             submitError,
                             handleSubmit,
                             values
                         }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={style.editForm}>
                            <Field name="fullName">
                                {({input, meta}) => (
                                    <div>
                                        <strong>Name:</strong>
                                        <input {...input} type="text"/>
                                        {(meta.error || meta.submitError) && meta.touched && (
                                            <span>{meta.error || meta.submitError}</span>
                                        )}
                                    </div>
                                )}
                            </Field>

                            <Field name="aboutMe">
                                {({input, meta}) => (
                                    <div>
                                        <strong>About me:</strong>
                                        <textarea {...input} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <Field name="lookingForAJobDescription">
                                {({input, meta}) => (
                                    <div>
                                        <strong>My professional
                                            skills</strong> {props.profile.lookingForAJobDescription}
                                        <textarea {...input} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <label>
                                <label htmlFor="lookingForAJob">
                                    <strong>Looking for a job:</strong>
                                    <Field id='lookingForAJob' type="checkbox" name="lookingForAJob"
                                           component="input"/>
                                </label>
                                {values.lookingForAJob ? 'Yes' : 'No'}
                            </label>
                        </div>
                        <div>
                            <div>
                                <strong>Contact: </strong>
                                {Object.keys(props.profile.contacts).map(key => {
                                    return <Contact key={key} contactTitle={key}
                                                    contactValue={props.profile.contacts[key]}/>
                                })}
                            </div>
                        </div>

                        {submitError && <div className="error">{submitError}</div>}
                        <button>Save</button>

                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}>
        <Field name={'contacts.' + contactTitle}>
            {({input, meta}) => (
                <div>
                    <strong>{contactTitle}</strong>
                    <input {...input} type="text"/>

                    {(meta.error || meta.submitError) && meta.touched && (
                        <span>{meta.error || meta.submitError}</span>
                    )}
                </div>
            )}
        </Field>{' '}
    </div>
}
export default ProfileDataForm;