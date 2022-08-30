/** @jsx h */
import { h } from "preact";
import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";
import Main from "../islands/Main.tsx";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
