// Authors: Haroun Ansari
import React from 'react';
import books from '../books';


export default class BookSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }

    createMenu = (style) => {
        const img = {
            height: "70vh",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50 %",
            paddingBottom: "0.5em"
        }

        let menu = [];

        for (let i in books) {
            menu.push(
                <div style={style} onClick={() => { this.props.setBook(i) }}>
                    <img style={img} src={books[i].img} alt={"Book " + i}></img>
                    {books[i].name}
                </div>
            )
        }

        return menu;
    }


    render() {
        const style = {
            height: "80vh",
            margin: "50px",
            textAlign: "center"
        };

        let menu = this.createMenu(style);

        return (
            <div style={style}>
                <div>
                    <h1>
                        Choose your book (More Coming Soon!)

                    </h1>
                </div>
                {menu}
            </div>

        )
    }
}