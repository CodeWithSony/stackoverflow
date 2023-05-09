import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import {logo} from "../../assets/logo.png";
import logo from "../../assets/logo.png";
import search from "../../assets/magnifying-glass-solid.svg";
import Avatar from "../Avatar/Avatar";
// import Button from "../../components/Button/Button"
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentuser";

const Navbar = () => {

const dispatch = useDispatch();
// const effect = useEffect();

useEffect(() => {


  return () => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }
}, [dispatch])

// What does dispatch () return?
// It returns the current state and a dispatch function. Use the dispatch function to dispatch actions to the reducer. As usual, useReducer returns an array with two elements: the state and a dispatch function. On the first call, the state is the return value of the initialization function.


// whenever it rerender call the dispatch


  // var user = null;
  // var user = JSON.parse(localStorage.getItem('Profile'));


  // abotu useSelector
  // we are passing it(currentUserReducer(userData)) inside useSelector so it can select data from here and data will be in the form of email, password, name, token etc.
  var user = useSelector((state)=>(state.currentUserReducer))
  // in state all the reducer function will stored and we can use one reducer function by using state.curretnUserReducer with the help of useSelector
  // useSelector used to select state.

  //it will select data from application by email.

  // we have to retrieve the data
  // we are passing the value to the user itself so we will use useSelector
  // useSelector
  // The selector will be called with the entire Redux store state as its only argument. The selector will be run whenever the function component renders (unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector). useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.

  

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-logo nav-item">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-btn nav-item">
          About
        </Link>
        <Link to="/" className="nav-btn nav-item">
          Products
        </Link>
        <Link to="/" className="nav-btn nav-item">
          For Teams
        </Link>
        <form>
          <input type="text" name="" id="" placeholder="Search..." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>

        {user === null ? (
          <Link to="/Auth" className="nav-item navLinks">
            Log in
          </Link>
        ) : (
          <>
            <Avatar backgroundColor='#009dff' px='5px' py='7px' borderRadius="51%" color='white'>
              <Link to='/'>M</Link>
            </Avatar>

            <button className="nav-item navLinks">Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
