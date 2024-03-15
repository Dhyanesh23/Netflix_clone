import React, { useEffect, useState } from 'react';
import './Nav.css';
import createBrowserHistory from 'history/createBrowserHistory';



const Nav = () => {
  const[show,handleShow] = useState(false);
  const history = createBrowserHistory({forceRefresh:true});
  
  const transitionNavBar = () =>{
    if (window.scrollY >100){
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar );
    return () => window.removeEventListener('scroll',transitionNavBar)
  },[])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
        onClick={() => history.push("/")}
        className='nav__logo' 
        src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" 
        alt=""
        />

        <img
        onClick={() => history.push("/profile")}
        className='nav__avatar'
         src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
         alt=""
         />
      </div>
    </div>
  )
}

export default Nav