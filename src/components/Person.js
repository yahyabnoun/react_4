import React from 'react';
class Person extends React.Component {
    render() {
        return (
            <>
            <div className="card mx-auto col-2" key={this.props.name}>
            <div className="card-header">Featured</div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name} , {this.props.age}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            
            </>
        );}} 
        
export default Person;
