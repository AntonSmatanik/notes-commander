import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Message from './Message';

const Messages = (() => {
    const { t } = useTranslation();
    const messages = useSelector((state) => state.messagesReducer);

    return (
        <>
            <h4 className="messages-header">{t('HTTP requests')}:</h4>
            {messages.length !== 0 && (
                <div className="messages">
                    {messages.map(message => (<Message key={`${message.timestamp}${message.method}`} message={message} />))}
                </div>
            )}
        </>
    );
});

export default Messages;
