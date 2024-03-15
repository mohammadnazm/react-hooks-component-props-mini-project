import React from "react";
import Header from "./Header"; // Adjust import path
import About from "./About"; // Adjust import path
import ArticleList from "./ArticleList"; // Adjust import path
import blogData from "../data/blog"; // Adjust import path

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About image={blogData.image} aboutText={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
