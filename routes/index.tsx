/** @jsx h */
import { h } from "preact";
import Header from "../islands/header.tsx";
import Main from "../islands/home.tsx";

export default function Home(): h.JSX.Element {
  return (
    <div>
      <Header></Header>
      <Main name="" playerList={[]}></Main>
    </div>
  );
}
