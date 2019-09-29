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

    componentDidMount() {
        // scroll to top when component renders
        window.scrollTo(0, 0);
    } 

    setVolume = (volume) => {
        this.setState({ volume: '' }, () => {
            this.setState({ volume });
        });
    }

    createBook = () => {
        const vol = this.state.book.data[this.state.volume];
        const driveUrl = 'https://drive.google.com/uc?id=';
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

        for (let i in vol) {
            book.push(
                <div style={style}>
                    <img style={img} src={driveUrl + vol[i].id} />
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