import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/post/PostList";
import CreatePost from "./components/post/CreatePost";
import EditPost from "./components/post/EditPost";
import DeletePost from "./components/post/DeletePost";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Blog</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/delete/:id" element={<DeletePost postId={":id"} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
