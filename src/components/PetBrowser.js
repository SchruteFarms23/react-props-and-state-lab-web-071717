import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="ui cards">
        {this.props.pets.map(pet=> <Pet key={pet.id} onAdoptPet={this.props.onAdoptPet} pet={pet} isAdopted= {this.props.adoptedPets.includes(pet.id)}/>)}
      </div>
    );
  }
}

export default PetBrowser;
