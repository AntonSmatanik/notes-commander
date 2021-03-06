import React from 'react';
import { Alert } from 'react-bootstrap';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { removeMessage } from '../../store/actions';

function Message(props) {
    const dispatch = useDispatch();
    
    const message = props.message;
    const dataTestId = `message-${message.timestamp}-${message.method}`;
    const dateTime = moment(message.timestamp).format("HH:mm:ss");

    return (
        <Alert data-testid={dataTestId} variant={message.type} onClose={() => dispatch(removeMessage(message))} dismissible>
            <Alert.Heading>{dateTime} &rarr; {message.body}</Alert.Heading>
            <div className="alert-content">
                <div>
                    <span className="sub-title">Status:</span> {message.status}
                </div>
                <div>
                    <span className="sub-title">Method:</span> {message.method}
                </div>
                <div>
                    <span className="sub-title">Endpoint:</span> /{message.endpoint}
                </div>
            </div>
        </Alert>
    );
}

export default Message;