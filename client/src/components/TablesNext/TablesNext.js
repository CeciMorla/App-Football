import React from "react";
import TableNext from "../TableNext/TableNext.js";

const TablesNext= ({next}) => {
    return(
        <div>
            {
                next?.map(e=>{
                    return(
                        <TableNext
                            key={e.fixture.id}
                            date={e.fixture.date}
                            teamHome={e.teams.home.name}
                            teamAway={e.teams.away.name}
                            logoH={e.teams.home.logo}
                            logoA={e.teams.away.logo}
                        />
                    )
                })
            }
        </div>
    )
}

export default TablesNext;