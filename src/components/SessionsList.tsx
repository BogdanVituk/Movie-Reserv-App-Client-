import React, { type FC } from 'react';
import type { Session } from '../types';
import SessionItem from './SessionItem';

interface SessionsListProps {
    sessions: Session[] | null
}

const SessionsList: FC<SessionsListProps> = ({sessions}) => {
    return (
        <div>
            {
                sessions?.map(item => {
                    return <SessionItem session={item}/>
                })
            }
        </div>
    );
};

export default SessionsList;