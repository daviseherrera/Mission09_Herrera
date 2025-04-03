import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

interface Team {
  school: string;
  name: string; 
  city: string;
  state: string;
}

function TeamList() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("/CollegeBasketballTeams.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setTeams(data.teams)
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div>
      <h2>College Basketball Teams</h2>
      <div className="team-list">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    </div>
  );
}

export default TeamList;