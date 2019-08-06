// Authors: Haroun Ansari
import React from 'react';
import books from '../books';


export default class BookSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }


    render() {
        const style = {
            height: "80vh",
            margin: "50px",
            textAlign: "center"
        };

        const img = {
            maxHeight: "100%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50 %",
            paddingBottom: "0.5em"
        }

        return (
            <div style={style}>
                <div>
                    <h1>
                        Choose your book (More Coming Soon!)
    
                    </h1>
                </div>
                <div style={style} onClick={() => { this.props.setBook(0) }}>
                    <img style={img} src={books[0].img} alt={"Book" + 0}></img>
                    {books[0].name}
                </div>
            </div>

        )
    }
}