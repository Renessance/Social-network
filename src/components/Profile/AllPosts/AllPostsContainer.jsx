import {addPostActionCreator} from "../../../redux/profile-reducer";
import AllPosts from "./AllPosts";
import {connect} from "react-redux";
import React from "react";
import {Field, Form} from "react-final-form";
import style from './AllPosts.module.css';

class AllPostsContainer extends React.Component {
    render() {
        return (
            <div className={style.wrapperPosts}>
                <Form onSubmit={formData => {
                    this.props.addPostActionCreator(formData.sendPost)
                }}>
                    {({handleSubmit, reset, pristine, form, submitting}) => (
                        <form className={style.postForm}
                              onSubmit={handleSubmit}
                        >
                            <Field name="sendPost">
                                {({input, meta}) => (
                                    <div className={style.textarea}>
                                        <textarea {...input} placeholder="Write post"/>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <div>
                                <button className={style.submit} disabled={pristine || submitting}>Publish</button>
                            </div>
                        </form>
                    )}
                </Form>

                <AllPosts
                    allPost={this.props.data.postsData}
                    photo={this.props.data.profile.photos.small}
                    fullName={this.props.data.profile.fullName}

                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {

    return {
        data: state.profilePage
    }
}

export default connect(mapStateToProps, {addPostActionCreator})(AllPostsContainer);
