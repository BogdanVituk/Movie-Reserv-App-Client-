import type { FC } from "react";
import { Link } from "react-router";
import type { Session } from "../types";

interface SessionsListProps {
    session: Session
}

const SessionItem: FC<SessionsListProps> = ({session}) => {

    console.log(session)

    return (
       <Link to={`/seats/${session.id}`}>
                                <div>{session.film?.name}</div>
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
    );
};

export default SessionItem;