import React, { Component } from 'react';

import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
             <div> 
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Blogs'>Blogs</Link></li>
                    <li><Link to='/Products'>Products</Link></li>
                    <li><Link to='/AboutUs'>About us</Link></li>
                </ul>
             </div>
        );
    }
}

export default Navbar;