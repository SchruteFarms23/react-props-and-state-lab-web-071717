import React from 'react';

class Pet extends React.Component {


  gender(){
    return this.props.pet.gender === "male" ? '♂' : '♀'
  }

  onAdopt=()=>{
    console.log(this.props.pet)
    this.props.onAdoptPet(this.props.pet.id)
  }



  render() {
    const pet = this.props.pet
    const adoptedOrNo = this.props.isAdopted
    console.log(adoptedOrNo)
    console.log(pet)

      return (
      <div className="card">
        <div className="content">
          <a className="header">Pet Name: {pet.name} gender: {this.gender()}</a>
          <div className="meta">
            <span className="date">Pet type: {pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age} </p>
            <p>Weight: {pet.weight}</p>

          </div>
        </div>
        <div className="extra content">
          {adoptedOrNo ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.onAdopt}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
