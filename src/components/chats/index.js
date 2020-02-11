import React from 'react';
import { ChatsWrapper } from './style';
import Chat from '../chat';
import { ALL_CHATS } from './constants';




const Chats = () => {
    return (
        <ChatsWrapper>
            <nav>
                <a className="active">Open</a>
                <a>Archived</a>
                <a>Snoozed</a>
                <a>Trash</a>
            </nav>
            <section>
                {ALL_CHATS.map((chat) => {
                    const { id, name, header, content, sent, unread } = chat
                    return <Chat
                        key={id}
                        name={name}
                        header={header}
                        content={content}
                        sent={sent}
                        unread={unread} />
                })}
            </section>
        </ChatsWrapper>
    )
};

export default Chats;