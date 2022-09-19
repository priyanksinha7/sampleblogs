import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./results.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Results(props) {
  return (
    <>
    
      <Header />
      <h1>Your Search Results</h1>
      <div className="home">
        <Posts posts={props.blogs} />
        <Sidebar />
      </div>
    </>
  );
}
