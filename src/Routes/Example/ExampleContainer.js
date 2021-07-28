import React from 'react'
import ExamplePresenter from "./ExamplePresenter";

export default class extends React.Component {

    componentDidMount() {

    }

    sample = (event) => {
        // google login

    }

    render() {
        return <ExamplePresenter sample={this.sample}/>
    }
}