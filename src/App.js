import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";
import "./App.css";
function App() {
  return (
    <>
      <Menu></Menu>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}
function Users() {
  return <h2>Users</h2>;
}

export default App;
