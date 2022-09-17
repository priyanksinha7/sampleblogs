import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
      
        <p>
          Store your thoughts.Free Your mind. Take that Road.
        </p>
        <p>
          Priyank Sinha
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
         <a href="https://www.facebook.com/"><i className="sidebarIcon fab fa-facebook-square"></i></a> 
         <a href="https://www.twitter.com/prynk_snh/"><i className="sidebarIcon fab fa-twitter-square"></i></a> 
         <a href="https://www.twitter.com/prynk_snh/"><i className="sidebarIcon fab fa-pinterest-square"></i></a>
         <a href="https://www.instagram.com/priyyyank/">  <i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}
