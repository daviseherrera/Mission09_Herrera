interface Team {
    school: string;
    name: string;
    city: string;
    state: string;
  }
  
  function TeamCard({ team }: { team: Team }) {
    return (
      <div className="team-card">
        <h2>{team.school}</h2>
        <p><strong>Mascot:</strong> {team.name}</p>
        <p><strong>Location:</strong> {team.city}, {team.state}</p>
      </div>
    );
  }
  
  export default TeamCard;