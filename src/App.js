import React from "react";
import "./App.css";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import useOnline from "./components/utils/useOnline";

function App({ getText }) {
  console.log("App component");
  const isOnline = useOnline();
  if(!isOnline)
    return <h1>User Offline!. Please check Internet conection.</h1>
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default App;
