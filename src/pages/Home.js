import React from "react";
import "../App.css";
import LoginHooks from "../components/Login";
// import LogoutHooks from "../components/Logout";

function Home() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <article>
        <section></section>
        <LoginHooks />
        {/* <LogoutHooks /> */}
      </article>
    </div>
  );
}

export default Home;
