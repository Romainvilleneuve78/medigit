import React, { Component } from 'react';
import './FormOrdo.css';

class FormOrdo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medic: '',
      dose: '',
      descr: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Effectuer les actions nécessaires avec les données du formulaire
    console.log('Médicament:', this.state.medic);
    console.log('Dose:', this.state.dose);
    console.log('Description:', this.state.descr);
    // Réinitialiser le formulaire
    this.setState({ medic: '', dose: '', descr: '' });
  }

  render() {
    return (
      <div className="container">

        <form onSubmit={this.handleSubmit} class="info">
          <div class='info1'>
            <label>Médicament:</label>
            <input type="text" name="medic" value={this.state.medic} onChange={this.handleChange}/>
          </div>

          <div class='info2'>
            <label>Prescription:</label>
            <input type="text" name="dose" value={this.state.dose} onChange={this.handleChange}/>
          </div>

          <div class='info3'>
            <label>Description:</label>
            <br></br>
            <textarea type="text" name="descr" value={this.state.descr} onChange={this.handleChange} row="3"/>
          </div>
        </form>

      </div>
    );
  }
}

export default FormOrdo;