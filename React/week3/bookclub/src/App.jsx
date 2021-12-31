import React, { useState, useEffect } from 'react'
import BooksComponent from './components/BooksContainer'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        const books = await response.json()
        setBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  const pickBook = (book) => {
    setSelectedBook(book)
  }

  console.log(selectedBook)

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksComponent books={books} pickBook={pickBook} />
      {selectedBook && <DetailPanel book={selectedBook} />}
    </>
  )
}

export default App
