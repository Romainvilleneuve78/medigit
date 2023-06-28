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

  supprimerFormulaire = (index) => {
    const nouveauxFormulaires = [...formulaires];
    nouveauxFormulaires.splice(index, 1);
    setFormulaires(nouveauxFormulaires);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Effectuer les actions nécessaires avec les données du formulaire
    console.log('Médicament:', this.state.medic);
    console.log('Dose:', this.state.dose);
    console.log('Description:', this.state.descr);
    // Ne pas réinitialiser le formulaire
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="cont">
          <label className="in">
            <text style={{ paddingBottom: '100px' }}>Médicament:</text>
            <input
              type="text"
              name="medic"
              value={this.state.medic}
              onChange={this.handleChange}
              className="input"
            />
          </label>
          <br />
          <label className="in">
            Dose:
            <input
              type="text"
              name="dose"
              value={this.state.dose}
              onChange={this.handleChange}
              className="input"
            />
          </label>
          <br />
          <label className="indes">
            <text>Description:</text>
            <textarea
              type="text"
              name="descr"
              value={this.state.descr}
              onChange={this.handleChange}
              className="input"
              rows="3"
            />
          </label>
          <br />
          <button type="submit">Valider</button>
          <button onClick={() => this.props.supprimerFormulaire(this.props.index)}>Supprimer</button>

        </form>
      </div>
    );
  }
}

export default FormOrdo;
