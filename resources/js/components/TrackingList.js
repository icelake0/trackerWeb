import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import TrackingDatatable from '../components/TrackingDatatable'
import * as firebase from "firebase/app";
import "firebase/database";

class TrackingList extends Component {
   
    constructor(){
        super()
        this.state = {
            trackingList : {},
            databaseRef : null
        }
    }
    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyDE-2KmG3Zuk6cn3xys7JQa-ET1_rhhj-o",
            authDomain: "tracker-243516.firebaseapp.com",
            databaseURL: "https://tracker-243516.firebaseio.com",
            projectId: "tracker-243516",
            storageBucket: "tracker-243516.appspot.com",
            messagingSenderId: "81905204798",
            appId: "1:81905204798:web:2700c33b27e0cf76"
        };
        firebase.initializeApp(firebaseConfig);
        const deRef = firebase.database().ref("locations_v2")
        deRef.on("value", this.handleTrackingListUpdate.bind(this))
        this.setState({databaseRef: deRef})
    }
    handleTrackingListUpdate(snapshot){
        this.setState({trackingList : snapshot.val()});
    }
    render(){
        return (
            <TrackingDatatable data = {this.state.trackingList} databaseRef = {this.state.databaseRef}/>
        );
    }
}

export default TrackingList;

if (document.getElementById('tracking-list')) {
    ReactDOM.render(<TrackingList />, document.getElementById('tracking-list'));
}
