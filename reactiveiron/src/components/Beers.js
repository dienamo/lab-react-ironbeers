import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header'



class Beers extends React.Component{
    state={
        listOfBeers : []
    }

    getAllBeers=()=>{
        axios.get('https://ih-beer-api.herokuapp.com/beers')
            .then(response=>{
                this.setState({listOfBeers:response.data}) 
            })
            .catch(err =>{
                console.log(err)
            })
    }

    componentDidMount() {
        this.getAllBeers();
      }

    render(){
        return(
            <div>
                <Header />
                {this.state.listOfBeers.map((beer)=>{
                    return(
                        <div key={beer._id}>
                        <h3>{beer.name}</h3>
                        <img src={beer.image_url} alt='' style={{width : 50}}></img>
                        <p>{beer.tagline}</p>
                        <p>Created by : {beer.contributed_by}</p>
                        <Link to={`/beer/${beer._id}`}>Details</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Beers