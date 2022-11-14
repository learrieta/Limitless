import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import SignIn from './components/pages/SignIn';
import { AuthContextProvider } from './context/AuthContext';
import Account from './components/pages/Account';
import Protected from './components/Protected';


function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/'  element ={<Home/>}/>
            <Route path='/services'  element ={<Services/>}/>
            <Route path='/contact'  element ={<Contact/>}/>
            <Route path='/sign-up'  element ={<SignUp/>}/>
            <Route path='/sign-in'  element ={<SignIn/>}/>
            <Route 
              path='/account'  
              element ={ 
                <Protected> 
                  <Account/>
                </Protected>
              }
            />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
