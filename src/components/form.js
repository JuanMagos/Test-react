import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import { submitInfo } from '../actions/submitAction'

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
                    <Field name="pais" type="text" className="form-control" component="input" placeholder="Pais"/>
                </div>
                <div className="col-6 offset-3">
                    <Field name="name" type="text" className="form-control" component="input" placeholder="Nombre"/>
                </div>
                <div className="col-6 offset-3">
                    <Field name="phone" type="text" className="form-control" component="input" placeholder="Telefono"/>
                </div>
                <div className="col-6 offset-3">
                    <Field name="email" type="email" className="form-control"    component="input" placeholder="Correo"/>
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