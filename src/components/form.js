import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import { submitInfo } from '../actions/submitAction'


const required = value => value ? undefined : 'Este campo es requerido'
const maxLength = max => value =>
  value && value.length > max ? `Deben ser ${max} o menos` : undefined
const maxLength50 = maxLength(50)
const number = value => value && isNaN(Number(value)) ? 'Debe ser número' : undefined
const minValue = min => value =>
  value && value.length < min ? `Deben ser como mínimo ${min} números` : undefined
const minValue10 = minValue(10)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Correo invalido' : undefined
const aol = value =>
  value && /.+@yahoo\.com/.test(value) ?
  'Cuidado, yahoo esta por extinguirse :)' : undefined

  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input className="form-control" {...input} type={type}/>
        {touched && ((error && <span class="text-danger">{error}</span>) || (warning && <span class="text-warning">{warning}</span>))}
      </div>
    </div>
  )
class MyForm extends Component {
  handleSubmit = formValues => {
      this.props.submitInfo(formValues);
  }  
  render() {
    return (
        <div className="container">
            <h2>Agrega un nuevo cuidador</h2>
            <br></br>
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="col-6 offset-3">
                    <Field name="pais" type="text" component={renderField} placeholder="Pais" validate={[ required, maxLength50 ]}/>
                    <br></br>    
                </div>
                <div className="col-6 offset-3">
                    <Field name="name" type="text" component={renderField} placeholder="Nombre" validate={[ required, maxLength50 ]}/>
                    <br></br>    
                </div>
                <div className="col-6 offset-3">
                    <Field name="phone" type="text" component={renderField} placeholder="Telefono" validate={[ required, number  ]} warn={minValue10}/>
                    <br></br>    
                </div>
                <div className="col-6 offset-3">
                    <Field name="email" type="email" component={renderField} placeholder="Correo" validate={[required, email]} warn={aol}/>
                    <br></br>    
                </div>
                <div className="col-6 offset-3">
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </div>             
            </form>
        </div>
    );
  }
}

export default connect(null,{submitInfo})(reduxForm({ form: 'newCarer'})(MyForm));