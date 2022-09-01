/** @jsx h */
import { h } from "preact";
import Header from "../islands/something.tsx";
import Main from "../islands/home.tsx";

export default function Home(): h.JSX.Element {
  return (
    <div>
      <Header></Header>
      <Main
        name=""
        playerList={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
        teamList={[]}
      >
      </Main>
    </div>
  );
}
