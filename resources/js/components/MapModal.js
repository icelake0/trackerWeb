import React , {Component} from 'react';
import MyMapComponent from './MyMapComponent'

class  MapModal extends Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidUpdate() {
        if(this.props.locationRef && this.props.locationRef !== this.state.locationRef){
            this.props.databaseRef.child(this.props.locationRef).on("value", (snapshort) => {
                let location = snapshort.val()
                this.setState({location, locationRef : this.props.locationRef})
            })
        }
    }
    render(){
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <span style = {{height : '80vh'}}>
                            <MyMapComponent location = {this.state.location} />
                        </span>
                    </div>
                </div>
            </div>
        );  
    }
  }
  
  export default MapModal