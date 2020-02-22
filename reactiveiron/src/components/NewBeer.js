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
    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        
        const {name , description , tagline , firstbrewed , brewertips , attenuationlevel , contribuedby} = this.state;
        
        axios.post("https://ih-beer-api.herokuapp.com/beers/new", { name, description,tagline,firstbrewed,brewertips,attenuationlevel,contribuedby })
          .then(() => {
              // this.props.getData();
              
              // Reset form
              this.setState({name: "", description: "",tagline:"",firstbrewed:"",brewertips:"",attenuationlevel:"",contribuedby:""});
          })
          .catch(error => console.log(error))
      }

    render(){
        return(
            <div>
                <Header />

                <form onSubmit={this.handleFormSubmit} className="form">
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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewBeer