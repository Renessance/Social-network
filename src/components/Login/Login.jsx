import React from 'react'
import {Form, Field} from 'react-final-form'
import {required} from "../utils/validators/validator";
import style from "./Login.module.css";

const Login = (props) => (
    <div className={style.loginWrapper}>
        <Form
            onSubmit={(formData) => {
                props.LoginThunk(formData.login, formData.password, formData.rememberMe, formData.captcha)
            }}

            validate={values => {
                const errors = {}
                if (!values.login) {
                    errors.login = 'Required'
                }
                if (!values.password) {
                    errors.password = 'Required'
                }

                return errors
            }}
            initialValues={{rememberMe: false}}

            render={({
                         submitError,
                         handleSubmit,
                         submitting,
                         values
                     }) => (
                <form
                    onSubmit={handleSubmit}
                >
                    <div>
                        <Field name="login">
                            {({input, meta}) => (
                                <div>
                                    <input {...input} type="email" placeholder="login"/>
                                    {(meta.error || meta.submitError) && meta.touched && (
                                        <span>{meta.error || meta.submitError}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                        <Field name="password" validate={required}>
                            {({input, meta}) => (
                                <div>

                                    <input {...input} type="password" placeholder="Password"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="remember">
                            <Field id='remember' type="checkbox" name="rememberMe"
                                   component="input"/> remember me
                        </label>
                    </div>
                    {
                        props.captchaUrl &&
                        <div>
                            <img src={props.captchaUrl} alt=""/>
                            <label htmlFor="captcha" >
                                <Field id='captcha' type="text" name="captcha"
                                       component="input" placeholder={'Enter the code'} validate={required}/>
                            </label>
                        </div>
                    }
                    {submitError && <div className="error">{submitError}</div>}
                    <button type="submit" disabled={submitting}>Log In</button>
                </form>
            )}
        />
        {props.error && <div className={style.error}> {props.error}</div>}
    </div>
)

export default Login;