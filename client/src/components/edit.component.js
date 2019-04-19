import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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
      capacity:Number
    }
  }
  // With this, we retrieve our values from the database
  componentDidMount() {
    axios.get('http://localhost:4000/departments/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                did: response.data.did,
                dname: response.data.dname,
                capacity: response.data.capacity
                
            });
        })
        .catch(function(error) {
            console.log(error)
        })
}
    // The set of methods that will be used to change the values

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
      // We prevent the default submit behavior, because we will use our own submit logic

    e.preventDefault();
    const obj = {
      did: this.state.did,
      dname: this.state.dname,
      capacity: this.state.capacity
    };
     // This will connect to our backend endpoint that handles the POST requests to our database
    axios.post('http://localhost:4000/departments/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));


    // This is used to simply go back to our Departments list page    
    this.props.history.push('/index');
  }

 // This method has to be used to view the page
 // It's used by default in any React App
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Department</h3>
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
                    <input type="submit" 
                      value="Update Department" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}