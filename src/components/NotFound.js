import React from 'react'
import { Link } from 'react-router-dom';

 const NotFound = () => (
    <div>
        Sorry! The page you requested is not found.
        Please go to <Link to="/">Home</Link>
    </div>
 );

 export default NotFound;