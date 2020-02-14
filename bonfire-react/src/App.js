import React, {useState} from 'react';

import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
//screen imoports
import Home from './Screens/Home'
import Post from './Screens/Post'
import Account from './Screens/Account'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import AddPost from './Screens/AddPost'
//component imports
import FooterComponent from './Components/Footer'
import HeaderComponent from './Components/Header'


const App = () => {
      const [posts, setPosts] = useState([])

      const addPost = post => {
       
          setPosts([
            {
                title: post.title,
                body: post.body
            },
            ...posts
          ])
      }
  
  return (

      <Router>
        <HeaderComponent/>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/post' component={Post}/>
          <Route exact path='/add-post' component={AddPost} posts={posts}/>
          <Route exact path='/account/:name' component={Account}/>
          <Route exact path='/sign-in' component={SignIn}/>
          <Route exact path='/sign-up' component={SignUp}/>
        </Switch>
        <FooterComponent />
      </Router>
  );
}




export default App;
