// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

interface ListProps {
  name: string;
  playerList: string[];
  teamList: Team[];
  groupList: Group[];
  children: any;
}

interface Team {
  index: number;
  player1: string;
  player2: string;
}

interface Group {
  team1: Team;
  team2: Team;
  team3: Team;
}

export default function Main(props: ListProps) {
  const [name, setName] = useState(props.name);
  const [playerList, addPlayer] = useState(props.playerList);
  const [teams, addTeam] = useState(props.teamList);
  const [groups, addGroup] = useState(props.groupList);
  return (
    <div>
      <input
        type="text"
        value={name}
        onInput={(e) => {
          setName(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          if (playerList.includes(name)) {
            return;
          }
          addPlayer([...playerList, name]);
          setName("");
        }}
      >
        Add Player
      </button>
      <ul>
        {playerList.map((item) => {
          return (
            <div>
              <li>{item}</li>
              <button
                onClick={() => {
                  addPlayer(playerList.filter((i) => i !== item));
                }}
              >
                -
              </button>
            </div>
          );
        })}
      </ul>
      <button
        onClick={() => {
          const temp = [...playerList];
          const teamList: Team[] = [];
          while (temp.length > 1) {
            teamList.push({
              index: teamList.length,
              player1: temp.splice(Math.random() * temp.length, 1)[0],
              player2: temp.splice(Math.random() * temp.length, 1)[0],
            });
          }
          addTeam(teamList);
        }}
      >
        Create Teams
      </button>
      <ul>
        {teams.map((item, index) => {
          return (
            <li>
              Team {index + 1}: {item.player1} and {item.player2}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          const temp = [...teams];
          const groupList: Group[] = [];
          while (temp.length > 1) {
            groupList.push({
              team1: temp.splice(Math.random() * temp.length, 1)[0],
              team2: temp.splice(Math.random() * temp.length, 1)[0],
              team3: temp.splice(Math.random() * temp.length, 1)[0],
            });
          }
          addGroup(groupList);
        }}
      >
        Create Groups
      </button>
      <ul>
        {groups.map((item, index) => {
          return (
            <li>
              Group {index + 1}: Team {item.team1.index} and Team{" "}
              {item.team2.index} and Team {item.team3.index}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
