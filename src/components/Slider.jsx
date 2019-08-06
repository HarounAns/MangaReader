// Authors: Haroun Ansari
import React from 'react';
import Paginator from './Paginator';


export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book: this.props.book,
            volume: '1', // volumes can be special, like 4s so need to be a string not an int
        };

        this.chapterMap = {
            "1": {
                lastPage: 66,
                front: true,
                back: true,
                credits: true
            },
            "2": {
                lastPage: 66,
                front: true,
                back: true,
                credits: true
            },
            "3": {
                lastPage: 70,
                front: true,
                back: true,
                credits: true
            },
            "4": {
                lastPage: 66,
                front: true,
                back: true,
                credits: true
            }
        }

    }

    setVolume = (volume) => {
        this.setState({ volume: '' }, () => {
            this.setState({volume});
        }); 
    }

    createBook = () => {
        const vol = this.state.book.short + "/volumes/" + this.state.volume + "/";
        const style = {
            height: "100vh",
        };

        const img = {
            maxHeight: "100%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50 %",
        }

        let book = [];

        if (this.chapterMap[this.state.volume].front) {
            book.push(
                <div style={style}>
                    <img style={img} src={vol + "00_front.png"} />
                </div>
            )
        }

        for (let i = 1; i <= this.chapterMap[this.state.volume].lastPage; i++) {
            if (i <= 9) {
                book.push(
                    <div style={style}>
                        <img style={img} src={vol + "0" + i + ".png"} />
                    </div>
                )
            } else {
                book.push(
                    <div style={style}>
                        <img style={img} src={vol + i + ".png"} />
                    </div>
                )
            }
        }

        if (this.chapterMap[this.state.volume].credits) {
            book.push(
                <div style={style}>
                    <img style={img} src={vol + "00_credits.png"} />
                </div>
            )
        }

        if (this.chapterMap[this.state.volume].back) {
            book.push(
                <div style={style}>
                    <img style={img} src={vol + "00_back.png"} />
                </div>
            )
        }

        return book;
    }

    createPaginator = () => {
        return (
            <Paginator
                volume={this.state.volume}
                book={this.state.book}
                setVolume={this.setVolume}
            />
        )
    }

    render() {
        if (this.state.volume) {
            return (
                <div>
                    {this.createPaginator()}
                    {this.createBook()}
                    {this.createPaginator()}
                </div>

            )
        }

        // else return empty
        return (
            <div>

            </div>
        )

    }
}