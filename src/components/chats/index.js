import React from 'react';
import { ChatsWrapper } from './style';
import Chat from '../chat';




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
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </section>
        </ChatsWrapper>
    )
};

export default Chats;