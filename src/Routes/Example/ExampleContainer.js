import React from 'react'
import ExamplePresenter from "./ExamplePresenter";

export default class extends React.Component {

    componentDidMount() {

    }

    sample = (response) => {
        // const gapi = window.gapi;
        //
        // const CLIENT_ID="708361541583-0vaf8j58t3nsp9rt82qt0f6r31qhtddi.apps.googleusercontent.com"
        // const API_KEY="AIzaSyCGHdNAOcs-Dn4BuFVNKIZwR8nHLHWUuiI";
        // const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
        // const SCOPES = "https://www.googleapis.com/auth/calendar";
        //
        // gapi.load('client:auth2',()=>{
        //
        //     gapi.client.init({
        //        apiKey:API_KEY,
        //        clientId:CLIENT_ID,
        //        discoveryDocs:DISCOVERY_DOCS,
        //         scope:SCOPES,
        //     })
        //
        //     gapi.client.load('calendar','v3',()=>console.log("?"))
        //
        //     gapi.auth2.getAuthInstance().signIn()
        //
        // })
        console.log(response)
        console.log(response.profileObj);

    }

    render() {
        return <ExamplePresenter sample={this.sample}/>
    }
}