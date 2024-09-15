import React from 'react'
import { NavLink } from 'react-router-dom'; 
import ShelfSearch from './ShelfSearch'



const Search = ({search, handleSearch, booksFromSearch, changeShelf, loadSearch}) => {

  return (
    <div className="search-books">
        <div className="search-books-bar">
        <NavLink to="/" className="close-search">Close</NavLink>
          <div className="search-books-input-wrapper">
          
            <input type="text" placeholder="Search by title or author" onChange={handleSearch}/>

          </div>

        </div>
        <div className="search-books-results ">

          {
            booksFromSearch === "No Books In This Search" ? (

             <p className="noBooks">{booksFromSearch}</p> 

            ):(

              <ShelfSearch booksFromSearch={booksFromSearch} changeShelf={changeShelf} loadSearch={loadSearch} />

            )

            

           

          }
            
              
            
        </div>
    </div>  )
}

export default Search