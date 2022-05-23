import React from "react";
import './../css/navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <a href='#greeting'>Home</a>
            <a href='#tic-tac-toe'>Tic-tac-toe</a>
            <a href='#contact'>Contact Me</a>
        </div>
    )
}

export default Navbar;