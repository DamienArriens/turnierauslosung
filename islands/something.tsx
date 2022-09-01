/** @jsx h */
import { h } from "preact";

export default function Header() {
  return (
    <header>
      <img src="/icon.svg" height={100} width={100} alt="SWAN"></img>
      <h1>SWAN Turnierplaner</h1>
    </header>
  );
}
