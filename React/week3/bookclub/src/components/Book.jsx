import React from 'react'
import styled from 'styled-components'

export const Container = styled.figure`
  cursor: ${($isLarge) => ($isLarge ? 'default' : 'pointer')};
  margin: 0;
`

export const Cover = styled.img`
  filter: grayscale(100%);
  border: 2px solid #000;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: 100%;
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-size: ${($isLarge) => ($isLarge ? '42px' : '28px')};
  margin: 0 0 10px 0;
  line-height: 1.3;
  @media (max-width: 800px) {
    font-size: ${($isLarge) => ($isLarge ? '32px' : '22px')};
  }
`

export const Author = styled.h4`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  font-family: 'Libre Baskerville', sans-serif;
  font-style: italic;
`

const Book = ({ book, pickBook, isLarge }) => {
  return (
    <Container $isLarge={isLarge} onClick={() => pickBook(book)}>
      <Cover alt={`Book cover for ${book.title} by ${book.author}`} src={book.image} />
      <figcaption>
        <Title $isLarge={isLarge}>{book.title}</Title>
        <Author>{book.author}</Author>
      </figcaption>
    </Container>
  )
}

export default Book
