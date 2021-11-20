import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
// import { Avatar } from '@material-ui/core';
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const [viewed, setViewed] = useState(1);
  const [connections, setConnections] = useState(1);

  useEffect(() => {
    setViewed(Math.floor(Math.random() * 100));
    setConnections(Math.floor(Math.random() * 1000));
  }, []);

  const recentItems = (topic) => (
    <div className="recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://i.pinimg.com/originals/12/54/09/1254093eda28964ac2ea4d158e7c0706.png"
          alt="cover pics"
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {/* email[0] displaying first charecter of email */}
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="stat_number">{viewed}</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on your post</p>
          <p className="stat_number">{connections}</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("Java")}
        {recentItems("Springboot")}
        {recentItems("Git & Github")}
        {recentItems("productivity")}
      </div>

      <div className="sidebar_bottomLast">
        <p>Discover more</p>
      </div>
    </div>
  );
}

export default Sidebar;
