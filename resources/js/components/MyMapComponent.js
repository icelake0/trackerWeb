import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component}  from 'react';
 
export class MyMapComponent extends Component {
  render() {
      let location = {lat : 6.189387, lng : 6.691168}
      if(this.props.location){
        location = {lat: this.props.location.lat, lng: this.props.location.lng}
      }
      console.log('set_location L ', this.props.location)
    return (
      <Map google={this.props.google} zoom={14}
      center={location} >
        <Marker
            title={'User Location'}
            name={'USER'}
            position={location} />
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAgOVJkRDhIvs5XdyjEdRJ0-R87Stt4ZO4')
})(MyMapComponent)