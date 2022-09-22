import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";
import MovieInterface from "./MovieInterface";
import ClickCount from "./ClickCount";
import Youtube from "./YouTube/Youtube";
import TailWind from "./TailWind";
import Kakao from "./Kakao/Kakao";
import "./Menu.css";

function Menu() {
  return (
    <>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  width={15}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                홈으로
              </Link>
            </li>

            <li>
              <Link to="/now_playing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  width={15}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                상영중 영화
              </Link>
            </li>
            <li>
              <Link to="/movies">👌 영화 목록</Link>
            </li>
            <li>
              <Link to="/upcoming">업커밍 영화 목록</Link>
            </li>
            <li>
              <Link to="/click">카운터</Link>
            </li>
            <li>
              <Link to="/youtube">유튭</Link>
            </li>
            <li>
              <Link to="/tailwind">테일와인드</Link>
            </li>
            <li>
              <Link to="/kakao">카카오</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/click" element={<ClickCount></ClickCount>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/now_Playing"
            element={<MovieInterface apiPath="now_playing"></MovieInterface>}
          ></Route>
          <Route
            path="/upcoming"
            element={<MovieInterface apiPath="upcoming"></MovieInterface>}
          ></Route>
          <Route path="/users" element={<Users></Users>}></Route>
          <Route
            path="/movies"
            element={<MovieInterface apiPath="popular"></MovieInterface>}
          ></Route>
          <Route path="/youtube" element={<Youtube></Youtube>}></Route>
          <Route path="/tailwind" element={<TailWind></TailWind>}></Route>
          <Route path="/kakao" element={<Kakao></Kakao>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return <h2>영화 정보 사이트</h2>;
}
function Users() {
  return <h2>Users</h2>;
}

export default Menu;
