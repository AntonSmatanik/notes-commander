import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Message from './Message';

const Messages = (() => {
    const { t } = useTranslation();
    const messages = useSelector((state) => state.messagesReducer);

    return (
        <div className="messages">
            <h3>{t('HTTP requests')}:</h3>
            {messages.map(message => (<Message key={`${message.timestamp}${message.method}`} message={message} />))}
        </div>
    );
});

export default Messages;
