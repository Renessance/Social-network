import React from "react";
import style from './Dialogs.module.css';
import DialogItems from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.data.dialogsData
        .map(dialog => <DialogItems key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.data.messagesData
        .map(message => {
            return <Message key={message.id} message={message.message}/>
        })

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                <ul>
                    {dialogsElements}
                </ul>
            </div>
            <div className={style.massages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;