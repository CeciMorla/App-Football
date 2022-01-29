import React from "react";
import TableFinish from "../TableFinish/TableFinish";

const TablesFinish= ({last}) => {
    return(
        <div>
            {
                last?.map(e=>{
                    return(
                        <TableFinish
                            key={e.fixture.id}
                            date={e.fixture.date}
                            teamHome={e.teams.home.name}
                            teamAway={e.teams.away.name}
                            logoH={e.teams.home.logo}
                            logoA={e.teams.away.logo}
                            goalsH={e.goals.home}
                            goalsA={e.goals.away}
                            fixture={e.fixture.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default TablesFinish;