import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
        super(props);
        // We need to bind our methods, otherwise we can't use the state object

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            did: Number,
            dname: '',
            capacity: Number
        }
    }
    // The set of methods used to change the values of the fields into the given values
  onChangeID(e) {
    this.setState({
      did: e.target.value
    });
  }
  onChangeName(e) {
    this.setState({
      dname: e.target.value
    })  
  }
  onChangeCapacity(e) {
    this.setState({
      capacity: e.target.value
    })
  }

  onSubmit(e) {
    const obj = {
        did: this.state.did,
        dname: this.state.dname,
        capacity: this.state.capacity
      };
    axios.post('http://localhost:4000/departments/add', obj)
        .then(res => console.log(res.data));
    this.props.history.push('/index');
    // We reset to the inital state, this is why whenever we submit and it refreshes, the fields are empty again
    this.setState({
      did: Number,
      dname: '',
      capacity: Number
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Create New Department</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Department ID:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.did}
                      onChange={this.onChangeID}
                      />
                </div>
                <div className="form-group">
                    <label>Department Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.dname}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Capacity: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.capacity}
                      onChange={this.onChangeCapacity}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Department" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}