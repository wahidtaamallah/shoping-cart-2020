import React  from 'react';
import { Link } from "react-router-dom";
import './header.css';

function Header (props)  {

    return ( 
        <header className="header">
           <Link to='/'><i class="fas fa-home fa-2x" ></i></Link>
           <Link to="/shop"><i class="fas fa-tshirt fa-2x"></i></Link>
            <Link to='/about'><i class="fas fa-info fa-2x"></i></Link>
            <Link to='/messages'><i class="fas fa-envelope-open-text fa-2x"></i></Link>
            <Link to="/cart"><i class="fas fa-shopping-cart fa-2x"></i><span className="cartNum" >{props.cart.length}</span>
                    </Link>
        </header>
     );
     
}

 
export default Header;