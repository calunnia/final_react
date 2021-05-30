import React, { useState } from "react";
import Player from "../Player/Player.jsx";

function Teams({ team ,search}) {
  const [show, setShow] = useState("");

  return (
    <div className="teams">
      <p> {team.name}</p>
      <p> {team.stadium}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "Show less" : "Show more"}
      </button>
       {show ? team.franchisePlayers.map((player) => (<Player player={player} search={search}/>)) : ''}
    </div>
  );
}

export default Teams;
