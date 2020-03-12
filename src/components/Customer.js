import React from 'react';

class Customer extends React.Component {
  render(){
      return (

        <div>
            <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
            <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} job={this.props.age}/>
        </div>
        
      );
  }
}


class CustomerProfile extends React.Component {
    render(){
        return (
            <div>
                <img style={{width: "100px"},{height:"100px"}} src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );
    }
}

class CustomerInfo extends React.Component {
    render(){
        return (
            <div>     
                <p>{this.props.gender}</p>
                <p>{this.props.age}</p>
                <p>{this.props.job}</p>
                <p>{this.props.birthday}</p>
            </div>
        );
    }
}


export default Customer;