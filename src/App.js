import React from 'react';
import Slider from './components/Slider';
import BookSelect from './components/BookSelect';
import Navbar from './components/Navbar';
import books from './books';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: '',
    };
  }

  setBook = (index) => {
    this.setState({ 
      book: books[index],
       
    });
  }

  mainApp = () => {
    if (!this.state.book) {
      return (
        <div>
          <BookSelect
            setBook={this.setBook}
          />
        </div>
      )
    } else {
      return (
        <div>
          <Slider
            book={this.state.book}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar 
          setBook={this.setBook}
        />
        {this.mainApp()}
      </div>
    )
  }
}