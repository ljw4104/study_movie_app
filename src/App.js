import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";
import MovieInterface from "./components/MovieInterface";
import ClickCount from "./components/ClickCount";
import Menu from "./components/Menu";
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
