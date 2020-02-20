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
import 'semantic-ui-css/semantic.min.css'



const App = () => {
      
      const [posts, setPosts] = useState([])
      const [state, setState] = useState([])

      const addPost = post => {
       
          setPosts([
            {
                title: post.title,
                body: post.body
            },
            ...posts
          ])
          // const handleLoggedStatus = () => {
          //   loggedIn: true,
          //   loggedEmail: loggedEmail
          // }
      }
     
      return (
      
       
      

      <Router>
        <HeaderComponent/>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/posts/:id' component={Post}/>
          <Route exact path='/add-post' component={AddPost} posts={posts}/>
          <Route exact path='/account/:name' />
          <Route exact path='/login' component={SignIn}/>
          <Route exact path='/sign-up' component={SignUp}/>
        </Switch>
        <FooterComponent />
        </Router>
        
  );
}




export default App;
