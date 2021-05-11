import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Coronavirus: Lagos updates", "Tops news - 394 readers")}
      {newsArticle("Bitcoin hits new high", "Tops news - 2,34 readers")}
      {newsArticle(
        "react is library not a framework",
        "Tops news - 5,324 readers"
      )}
      {newsArticle(
        "Competetive coding is sport not key",
        "Tops news - 1,324 readers"
      )}
      {newsArticle("covid-19 new varient", "Tops news - 6,324 readers")}
      {newsArticle("meme share", "Tops news - 22,324 readers")}
    </div>
  );
}

export default Widgets;
