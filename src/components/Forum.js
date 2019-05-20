import React, { Component } from 'react';
import forums from '../forums'

class Forum extends Component {
    constructor(props){
        super(props)
        this.state = {
            forums: [],
            that: ''
        }
    }

    dataRender = (e) => {
        console.log(forums)
        this.setState({
            forums: forums
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.dataRender}>data tester (check yo console)</button>
            </div>
        );
    }
}

export default Forum;