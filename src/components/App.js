import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
// import allPets from '../data/pets.js'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  fetchPets=() => {
    let url = '/api/pets';

    if(this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`;
    }
    fetch(url).then(res => res.json()).then(pets => this.setState({pets}))
  }



  handleAdoptPet=(id) =>{
    console.log(id)
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  handleFilterChange=(filter)=>{
    console.log(filter)
    this.setState({
      filters: Object.assign({}, {type: filter})
    })
  }

  render() {
    console.log(this.state.filters)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType = {this.handleFilterChange} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
