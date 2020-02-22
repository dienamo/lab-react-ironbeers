import React from 'react'
import axios from 'axios'
import Header from './Header'

class NewBeer extends React.Component{
    state={
        name:"",
        tagline:"",
        description:"",
        firstbrewed:"",
        brewertips:"",
        attenuationlevel:"",
        contribuedby:""
    }
    createNewBeer=()=>{
        axios.post(`https://ih-beer-api.herokuapp.com/beers/new`)
          .then( responseFromApi => {
              const theBeer = responseFromApi.data;
              this.setState(theBeer);
          })
          .catch(err =>console.log(err))
    }
    handleChange = (event) => {
        this.setState({
          name: event.target.value,
        })
      }
    render(){
        return(
            <div>
                <Header />

                <form className="form">
                    <label>Name:
                        <input type="text" name="name" value={this.state.name} onChange={e=>this.handleChange(e)}/>
                    </label>
                    <label>Tagline:
                        <input type="text" name="tagline" value={this.state.tagline} onChange={e=>this.handleChange(e)}/>
                    </label>
                    <label>Description:
                        <textarea type="text" name="description" value={this.state.description} onChange={e=>this.handleChange(e)}/>
                    </label>
                    <label>First Brewed
                        <input type="text" name="firstbrewed" value={this.state.firstbrewed} onChange={e=>this.handleChange(e)}/>
                    </label>
                    <label>Brewer Tips
                        <input type="text" name="brewertips" value={this.state.brewertips} onChange={e=>this.handleChange(e)}/>
                    </label>
                    <label>Attenuation Level
                        <input type="number" name="attenuationlevel" value={this.state.attenuationlevel} onChange={e=>this.handleChange(e)}/>
                    </label>
                    <label>Contribued by
                        <input type="text" name="contribuedby" value={this.state.contribuedby} onChange={e=>this.handleChange(e)}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default NewBeer