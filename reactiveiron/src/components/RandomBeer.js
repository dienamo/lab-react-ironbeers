import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header'



class RandomBeer extends React.Component{
    state={}

    getRandomBeer=()=>{
        axios.get('https://ih-beer-api.herokuapp.com/beers/random')
            .then(response=>{
                const randomBeer = response.data
                this.setState(randomBeer) 
            })
            .catch(err =>{
                console.log(err)
            })
    }

    componentDidMount() {
        this.getRandomBeer();
      }

    render(){
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

export default RandomBeer