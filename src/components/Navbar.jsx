// Authors: Haroun Ansari
import React from 'react';


export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="#" onClick={() => {this.props.setBook('')}}>Books</a>
                </nav>
            </div>
        )
    }
}
