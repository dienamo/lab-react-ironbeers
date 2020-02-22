import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Header from './Header'

class Beer extends React.Component{

    state={}
    componentDidMount(){
        this.getSingleBeer();
    }
    getSingleBeer = () => {
        const { params } = this.props.match;
        
        axios.get(`https://ih-beer-api.herokuapp.com/beers/${params.id}`)
          .then( responseFromApi => {
              const theBeer = responseFromApi.data;
              this.setState(theBeer);
          })
          .catch(err =>console.log(err))
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <Header />
                <h3>{this.state.name}</h3>
                <img src={this.state.image_url} alt='' style={{width : 50}}></img>
                <p>{this.state.tagline}</p>
                <p>Created by : {this.state.contributed_by}</p>
                <p style={{width :300}}>{this.state.description}</p>
                <Link to={'/'}>Home</Link>
            </div>
        )
    }
}

export default Beer