import React from 'react';



export class User extends React.Component{
    render(){
        return (
            <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-header">
                        {this.props.data.id}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.name}</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-primary" onClick = {this.props.print}>Details</button>
                    </div>
                    <div className="card-footer text-muted">
                        {this.props.data.team}
                    </div>
                </div>
            </div>
            
        );
    }
}