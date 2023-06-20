import React, { Component, useState } from 'react';
import './FormOrdo.css';

// class FormOrdo extends Component {
function FormOrdo ({ onFormSubmit }) {

  const [medic, setMedic] = useState('');
  const [dose, setDose] = useState('');
  const [descr, setDescr] = useState('');

  const handleChange = (event) => {
    // setState({ [event.target.name]: event.target.value });
    const { name, value } = event.target;
    if (name === 'medic') {
      setMedic(value);
    } else if (name === 'dose') {
      setDose(value);
    } else if (name === 'descr') {
      setDescr(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Appeler la fonction de soumission du formulaire passée en tant que prop
    onFormSubmit({ medic, dose, descr });
    // Réinitialiser le formulaire
    setMedic('');
    setDose('');
    setDescr('');
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="cont">
          <label className='in'>
              {/* <text style={{paddingBottom:'100px'}}>Médicament:</text> */}
              Médicament:
              <input type="text" name="medic" value={medic} onChange={handleChange} className='input'/>
          </label>
          <br />
          <label className='in'>
              Dose:
              <input type="text" name="dose" value={dose} onChange={handleChange} className='input'/>
          </label>
          <br />
          <label className='indes'>
              Description:
              <textarea type="text" name="descr" value={descr} onChange={handleChange} className='input' row="3"/>
          </label>
          <br />

      </form>
    </div>
  );
}


export default FormOrdo;