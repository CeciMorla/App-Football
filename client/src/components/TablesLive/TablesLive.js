import React from "react";
import TableLive from "../TableLive/TableLive";

const TablesLive= ({live}) => {
    return(
        <div>
            {
                live?.map(e=>{
                    return(
                        <TableLive
                            key={e.fixture.id}
                            date={e.fixture.date}
                            teamHome={e.teams.home.name}
                            teamAway={e.teams.away.name}
                            logoH={e.teams.home.logo}
                            logoA={e.teams.away.logo}
                            goalsH={e.goals.home}
                            goalsA={e.goals.away}
                        />
                    )
                })
            }
        </div>
    )
}

export default TablesLive;