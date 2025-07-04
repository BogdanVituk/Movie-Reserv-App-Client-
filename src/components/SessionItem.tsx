import type { FC } from "react";
import { Link } from "react-router";
import type { Session } from "../types";

interface SessionsListProps {
    session: Session
}

const SessionItem: FC<SessionsListProps> = ({session}) => {


    return (
        <div className="bg-[rgb(15,15,53)] w-[300px] mb-4 p-2 rounded-2xl mr-4 ">
        <Link to={`/seats/${session.id}`}>
            <div className="font-semibold text-[17px]">{session.film?.name}</div>
            <div> <span className="font-semibold">Start time:</span> { new Date(session.startTime).toLocaleDateString('uk-UA', {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            })}</div>
            <div> <span className="font-semibold">End time:</span>  { new Date(session.endTime).toLocaleDateString('uk-UA', {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            })}</div>
            <div className="font-semibold ">Total places: {session.totalPlaces}</div>
         </Link>
        </div>
    );
};

export default SessionItem;