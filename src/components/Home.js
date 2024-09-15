import React from 'react'
import { NavLink } from 'react-router-dom'; 
import Shelf from './Shelf'


export const Home = ({books, changeShelf, handleBooksSearch}) => {
    const clearSearchArea = (e) => {
        handleBooksSearch(e)
    }
   
    return (
        
            
            <div className="list-books">
                        <div className="list-books-title">
                        <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                        <div>
                            <Shelf section="Currently Reading" category="currentlyReading" books={books} changeShelf={changeShelf}/>
                            <Shelf section="Want To Read" category="wantToRead" books={books} changeShelf={changeShelf}/>
                            <Shelf section="Read" category="read" books={books} changeShelf={changeShelf}/>

                        </div>
                        </div>
                        <div className="open-search" onClick={clearSearchArea}>
                            <NavLink className="add"  to="/search" >Add a book</NavLink>
                        </div>  
        </div>
        )
}

export default Home