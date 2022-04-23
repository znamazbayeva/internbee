import React, { Component } from "react";
import Disqus from "disqus-react";

const About = () => {
  const disqusShortname = "internbee";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "article-id",
    title: "Title of Your Article",
  };

  return (
    <div className="article-container">
      <h1>Page Title</h1>

      <p>Page content.</p>

      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
};

export default About;
