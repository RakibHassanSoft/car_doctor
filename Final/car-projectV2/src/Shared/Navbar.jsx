import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {

 const {user,logOut} = useContext(AuthContext)
   const handleLogOut =()=>{
     logOut()
     
   }

   const navItems = <>
   <li><NavLink className='btn' to='/'>Home</NavLink></li>
   <li><NavLink  className='btn' to='/about'>About</NavLink></li>
      {
        user?.email ?
        <>
        <li><NavLink onClick={handleLogOut}  className='btn' to='/'>Logout</NavLink></li> 
        <li><NavLink  className='btn' to='/bookings'>My bokings</NavLink></li>
        </>:
          <div className='flex gap-2'>
            <li><NavLink  className='btn' to='/login'>Login</NavLink></li>
            <li><NavLink  className='btn' to='/signup'>Sign up</NavLink></li>
           
          </div>
        
      }
    </>

    return (
        <div className="navbar bg-base-100  h-32 mb-3">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
        <li><a>Item 3</a></li>
      </ul>
    </div>
   <Link to='/'><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-warning">Appointmemt</button>
  </div>
</div>
    );
};

export default Navbar;