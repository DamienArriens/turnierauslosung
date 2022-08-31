/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
// import $ from "https://code.jquery.com/jquery-3.6.1.min.js";

interface ListProps {
  name: string;
  playerList: string[];
}

export default function Main(props: ListProps) {
  const [name, setName] = useState(props.name);
  const [playerList, addPlayer] = useState(props.playerList);
  const listItems = playerList.map((item) => <li>{item}</li>);
  return (
    <div>
      <h1>Main</h1>
      <input type="text"></input>
      <ul id="playerList">
        {listItems}
      </ul>
      <button
        onClick={() => {
          setName(name);
          playerList.push(name);
          addPlayer(playerList);
        }}
        label="Add Player"
        height={400}
        width={400}
      >
      </button>
    </div>
  );
}
