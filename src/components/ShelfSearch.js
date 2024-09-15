import React from 'react'
import Book from './Book'


const shelfSearch = ({booksFromSearch, changeShelf, loadSearch}) => {

//     const clearSearchShelf = (e) => {
//     clearSearchBooks(e)
// }

// const n = "No Books";

  return (
    
        <div className="bookshelf-books">

            <ol className="books-grid">

            
                    {
                      loadSearch ?(

                            booksFromSearch.map((book) => (

                              <Book key={book.id} 
                                    book={book}
                                    changeShelf={changeShelf}
                                    
                                    />
                            ))
                      ):(                      
                          booksFromSearch
                          
                        )                     
                    }

            </ol>
      </div> 
  )
}

export default shelfSearch