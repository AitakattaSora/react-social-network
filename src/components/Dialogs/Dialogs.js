import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import ActionButton from '../common/buttons/ActionButton';
import FormikTextarea from '../common/inputs/FormikTextarea';
import { Formik, Form } from 'formik';

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  const messagesElements = props.messages.map((msg) => {
    return <Message key={msg.id} message={msg.message} />;
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div className={styles.inputField}>
          <Formik
            initialValues={{ message: '' }}
            onSubmit={(values, { resetForm }) => {
              props.sendMessage(values.message);
              resetForm();
            }}
          >
            {() => (
              <Form>
                <FormikTextarea
                  placeholder='Start writing message...'
                  name='message'
                />
                <div className={styles.buttonContainer}>
                  <ActionButton type='submit' name='Send Message' />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dialogs;
