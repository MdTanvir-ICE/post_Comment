import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostComment from './Component/postComment/PostComment';
import PostDetail from './Component/postDetail/PostDetail';
import PostCommentControl from './Component/PostCommentControl/PostCommentControl';
import Navbar from './Component/NavBar/Navbar';


function App() {

  return (

    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <PostComment></PostComment>
        </Route>
        <Route path="/postDetail/:id">
          <PostDetail></PostDetail>
        </Route>
        <Route path="/post&comment/:id">
          <PostCommentControl></PostCommentControl>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
