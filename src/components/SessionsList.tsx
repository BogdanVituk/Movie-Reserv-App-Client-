import React, { type FC } from 'react';
import type { Session } from '../types';
import SessionItem from './SessionItem';

interface SessionsListProps {
    sessions: Session[] | null
}

const SessionsList: FC<SessionsListProps> = ({sessions}) => {

    if(!sessions) {
        return <div>Не має...</div>
    }

    return (
        <div className='flex flex-wrap'>
            {
                sessions?.map(item => {
                    return <SessionItem session={item}/>
                })
            }
        </div>
    );
};

export default SessionsList;