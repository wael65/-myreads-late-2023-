import React, {Component}  from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home.js'
import Search from './components/Search.js'


class BooksApp extends Component {
  state = {
    showSearchPage: false,
    books : [] ,
    search : "",
    booksFromSearch : [],
    loadSearch: false,
    
  }


  //To Get All Books from Database
  getAllBooks = () => {
    BooksAPI.getAll()
    .then(res => { 
      this.setState(
        { books : res}
      )
    })  
  }

  //To Show All Books when page loded
  componentDidMount(){
    this.getAllBooks(); 
  }

     //To handle shelf change
    changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)          // update book shelf
    .then(response => 
      this.getAllBooks()                 // get boxes after update the shelf
    )
  };

 
  //To handle search
  handleSearch = async (event) => {
    await this.setState({
      search: event.target.value,
    });
    // {console.log(this.state.search)};
    this.handleBooksSearch(this.state.search)
  };
 

  handleBooksSearch = (search) => {
    if((search.length) > 0){
      BooksAPI.search(search).then((res) => { 
        if(! res.error){
          this.setState({
            // booksFromSearch: res,

            // next pice of code for define book'shelf in search page ( line 66 :line 71)
            booksFromSearch: res.map((booksSearch) => {
              this.state.books.forEach((book) => {
                if (booksSearch.id === book.id) booksSearch.shelf = book.shelf
              })
              return booksSearch;
            }),
            
          loadSearch: true,
          })
        }else{
          this.setState({
            booksFromSearch : "No Books In This Search",
          })
        }
      }) 
    }else{
      this.setState({
      booksFromSearch : "No Books In This Search",
      })

    }
  }

  
  

  render() {
    return (
      <Router>
      <div className="app">

        <Routes>
            <Route exact="true" path="/"  
              element={<Home 
                books={this.state.books} 
                changeShelf={this.changeShelf}
                handleBooksSearch={this.handleBooksSearch}
              />}
            />

            <Route path="/search"
              element={<Search 
                search={this.state.search} 
                handleSearch={this.handleSearch}
                booksFromSearch={this.state.booksFromSearch}
                changeShelf={this.changeShelf}
                loadSearch={this.state.loadSearch}
              />}
            />
        </Routes>
      
      </div>
      </Router>
    )
  }
}

export default BooksApp
