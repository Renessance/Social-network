import React from "react";
import {addMassageAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {Form} from "react-final-form";
import DialogForm from "./DialogForm";
import {withAuthRedirect} from "../hoc/AuthRedirect";

class DialogsContainer extends React.Component {
    render() {
        return (
            <div>
                <Dialogs {...this.props}/>

                <Form onSubmit={formData => {
                    this.props.addMassageAction(formData.sendMessage)
                }}>
                    {({handleSubmit, pristine, form, reset, submitting}) => (
                        <DialogForm handleSubmit={handleSubmit} pristine={pristine} form={form} reset={reset} submitting={submitting}/>
                    )}
                </Form>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.messagePage,
    }
}

export default compose(
    connect(mapStateToProps, {addMassageAction}),
     withAuthRedirect
)(DialogsContainer);


