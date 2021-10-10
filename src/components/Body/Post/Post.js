import { Avatar,IconButton } from "@material-ui/core";
import React, { useState, forwardRef } from "react";

import InputOption from "../Feed/InputOption";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"; // ref = reference
// forwardRef for animation

const Post = forwardRef(
  ({ likes, name, description, message, photoUrl }, ref) => {
    const [liked, setLiked] = useState(false);

    return (
      <div ref={ref} className="post">
        <div className="post_header">
          <Avatar src={photoUrl}></Avatar>
          <div className="postInfo">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
        </div>
        <div className="post_buttons">
          <div className="like_buttons">
            {liked ? (
                <IconButton>
              <ThumbUpAltIcon
                className="color_Like"
                onClick={(e) => setLiked(false)}
              />
              </IconButton>
            ) : (
              <IconButton>
              <ThumbUpAltOutlinedIcon onClick={(e) => setLiked(true)} />
              </IconButton>
            )}
          </div>


          <InputOption Icon={ChatOutlinedIcon} />
          <InputOption Icon={ShareOutlinedIcon} />
          <InputOption Icon={SendOutlinedIcon} />
          {/* <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" /> */}
        </div>
      </div>
    );
  }
);

export default Post;
