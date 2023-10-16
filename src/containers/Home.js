import React from "react";
import "../assets/css/Home.css";
import Item from "../components/Item";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="wraper">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </div>
    </>
  );
}
