import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const NavBar = ({setSearch}) => {
    const cartItem =useSelector ((state)=> state.groupReducer.cart)
    return (
        <div style={{backgroundColor:"grey", padding:"10px"}}>
            <h2>Movies Data</h2>
            <Link to="/" style={{textDecoration:"none",fontSize:"25px",paddingRight:"20px",color:"blue"}} ><b> Home</b></Link>

            <input onChange={(e)=> setSearch(e.target.value)} type="search" placeholder='Search movie here' />    
            <Link to="/cart" style={{textDecoration:"none",fontSize:"25px",paddingLeft:"20px",color:"blue"}}> <b> Cart</b>:{cartItem.length}</Link>
            {/* <button>search</button> */}
            
        </div>
    );
};

export default NavBar;