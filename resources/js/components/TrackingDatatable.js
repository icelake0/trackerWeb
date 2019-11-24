import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import MyMapComponent from './MyMapComponent'
import MapModal from './MapModal'

class TrackingDatatable extends Component{

    constructor(){
        super()
        this.state = {
            location : {
                lat: -34.397,
                lng: 150.644
            },
            locationRef : null
        }
    }
    showModal(locationRef){
        this.setState({locationRef}, () => {
            $('#exampleModal').modal('toggle')
        })    
    }
    render(){
        return (
            <div className="row">
                <MapModal locationRef = {this.state.locationRef} databaseRef = {this.props.databaseRef}/>
                <div className="col-12">
                <div className="card">
                    <div className="card-header">
                    <h3 className="card-title">Users Locations Table</h3>
                    </div>
                    <div className="card-body">
                    <table id="example2" className="table table-bordered table-hover">
                        <thead>
                        <tr>
                        <th>User Id</th>
                        <th>Email</th>
                        <th>Longitude</th>
                        <th>Latitude</th>
                        <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(this.props.data).map(element => {
                                return (
                                    <tr key = {element}>
                                        <td>{this.props.data[element].user_id}</td>
                                        <td>{this.props.data[element].email} </td>
                                        <td>{this.props.data[element].lng}</td>
                                        <td>{this.props.data[element].lat}</td>
                                        <td><button className = 'btn btn-success btn-md' onClick = {this.showModal.bind(this, element)}>View On Map</button></td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            
            </div>
        );
    }
}

export default TrackingDatatable;