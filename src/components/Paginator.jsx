// Authors: Haroun Ansari
import React from 'react';


export default class Paginator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            volume: this.props.volume,
            book: this.props.book,
            prevExists: true,
            nextExists: true,
        };


    }

    handleClick = (event) => {
        const val = event.target.innerHTML;
        console.log(typeof val);
        console.log(parseInt(val));

        const acceptedValues = ["Next", "Previous", "..."];

        if (!acceptedValues.includes(val) && isNaN(parseInt(val))) return;

        if(val == 'Next' && this.state.nextExists) {
            const next = (parseInt(this.state.volume) + 1).toString();
            this.props.setVolume(next);
        }

        else if (val == 'Previous' && this.state.prevExists) {
            console.log(this.state.volume);
            const prev = (parseInt(this.state.volume) - 1).toString();
            this.props.setVolume(prev);
        }

        else if (val == '...') {
            // do nothing
        }
        
        else {
            this.props.setVolume(val);
        }
    }

    render() {
        const style = {
            margin: "10px"
        }

        // EDGE CASE ONLY ONE VOLUME
        if (this.state.volume === this.state.book.firstVol && this.state.volume === this.state.book.lastVol){
            this.state.prevExists = false;
            this.state.nextExists = false;
            
            return (
                <div style={style}>
                    <ul class="pagination justify-content-center" onClick={this.handleClick}>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">Previous</a>
                        </li>

                        <li class="page-item"><a class="page-link" href="#">{this.state.volume}</a></li>
                        
                        <li class="page-item disabled">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            )
        }

        if (this.state.volume === this.state.book.firstVol) {
            this.state.prevExists = false;
            this.state.nextExists = true;
            return (
                <div style={style}>
                    <ul class="pagination justify-content-center" onClick={this.handleClick}>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">Previous</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">{this.state.volume}</a></li>
                        <li class="page-item"><a class="page-link" href="#">{parseInt(this.state.volume) + 1}</a></li>
                        {this.state.book.lastVol > 3 && <li class="page-item"><a class="page-link" href="#">...</a></li>}
                        <li class="page-item"><a class="page-link" href="#">{this.state.book.lastVol}</a></li>
                        
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            )
        }

        if (this.state.volume === this.state.book.lastVol) {
            this.state.prevExists = true;
            this.state.nextExists = false;

            return (
                <div style={style}>
                    <ul class="pagination justify-content-center" onClick={this.handleClick}>
                        <li class="page-item">
                            <a class="page-link" href="#">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        {this.state.volume > 4 && <li class="page-item"><a class="page-link" href="#">...</a></li>}
                        {this.state.volume <= 4 && <li class="page-item"><a class="page-link" href="#">{parseInt(this.state.volume) - 1}</a></li>}
                        <li class="page-item active"><a class="page-link" href="#">{this.state.volume}</a></li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            )
        }

        // if middle volume 
        this.state.prevExists = true;
        this.state.nextExists = true;

        return (
            <div style={style}>
                <ul class="pagination justify-content-center" onClick={this.handleClick}>
                    <li class="page-item">
                        <a class="page-link" href="#">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    {this.state.volume > 3 && <li class="page-item"><a class="page-link" href="#">...</a></li>}
                    {this.state.volume != 2 && <li class="page-item"><a class="page-link" href="#">{parseInt(this.state.volume) - 1}</a></li>}
                    <li class="page-item active"><a class="page-link" href="#">{this.state.volume}</a></li>
                    {this.state.volume != 3 && <li class="page-item"><a class="page-link" href="#">{parseInt(this.state.volume) + 1}</a></li>}
                    {this.state.book.lastVol > 4 && <li class="page-item"><a class="page-link" href="#">...</a></li>}
                    <li class="page-item"><a class="page-link" href="#">{this.state.book.lastVol}</a></li>
                    
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </div>
        )
    }
}
