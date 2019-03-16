import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class UsersList extends Component {

  render() {
    return (
        <div className="container">
            <div className="row">
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Pais</th>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((userDetail, index) => {
                        return (<tr key={userDetail.email}>
                            <th>{userDetail.pais}</th>
                            <th>{userDetail.name}</th>
                            <th>{userDetail.phone}</th>
                            <th>{userDetail.email}</th>
                        </tr>)
                    })}
                </tbody>
                </table>
            </div>
        </div>
        
    );
  }
}

const mapStateToProps = (state) => {
    return {
        users: state.user
    }
  }

export default connect(mapStateToProps, {})(UsersList);