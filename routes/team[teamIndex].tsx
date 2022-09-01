/** @jsx h */
import { h } from "preact";
import Header from "../islands/header.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Team(props: PageProps): h.JSX.Element {
  return (
    <div>
      <Header></Header>
      <h1>Team {props.params.teamIndex}</h1>
    </div>
  );
}
