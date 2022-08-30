/** @jsx h */
import { h } from "preact";
import Footer from "../islands/footer.tsx";
import Header from "../islands/header.tsx";
import Main from "../islands/main.tsx";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
