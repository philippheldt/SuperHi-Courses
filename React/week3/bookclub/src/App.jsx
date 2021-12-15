import React, { useState, useEffect } from 'react'
import BooksComponent from './components/BooksContainer'

const App = () => {
  const [books, setBooks] = useState([])

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

  return (
    <>
      <BooksComponent books={books} />
    </>
  )
}

export default App
