/** @jsx h */
import { h } from "preact";
import { Button } from "../components/Button.tsx";

export default function Main() {
  return (
    <div>
      <h1>Main</h1>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      <Button label="Add Player" height={400} width={400}></Button>
    </div>
  );
}
