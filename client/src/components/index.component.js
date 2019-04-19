import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    // A constructor for the class

  constructor(props) {
            // Calling parent constructer and passing props, this has to be done in order to use the (this)

      super(props);
      this.state = {depts: []};
    }
    // 
    componentDidMount(){
      axios.get('http://localhost:4000/departments')
        .then(response => {
          this.setState({ depts: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    // This function will be used to view our data in a table, TableRow is the table component defined in another file
    tabRow(){
      return this.state.depts.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Departments</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Department ID</th>
                <th>Department Name</th>
                <th>Capacity</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }