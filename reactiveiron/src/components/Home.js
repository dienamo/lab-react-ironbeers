import React from 'react'

import { Link } from 'react-router-dom';


class Home extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/beers" style={{ textDecoration: 'none' }}>Beers</Link></li>
                    <li><Link to="/random-beer" style={{ textDecoration: 'none' }}>Random Beers</Link></li>
                    <li><Link to="/new-beer" style={{ textDecoration: 'none' }}>New Beer</Link></li>
                </ul>
            </div>
        )
    }
}

export default Home