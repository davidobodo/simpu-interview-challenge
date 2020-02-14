import React from 'react';
import { ChatsWrapper } from './style';
import ChatPreview from '../../../components/chatPreview';
import { ALL_CHATS } from './constants';




const Chats = () => {
    return (
        <ChatsWrapper>
            <nav>
                <button className="active">Open</button>
                <button>Archived</button>
                <button>Snoozed</button>
                <button>Trash</button>
            </nav>
            <section>
                {ALL_CHATS.map((chat) => {
                    const { id, name, header, content, sent, unread } = chat
                    return <ChatPreview
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