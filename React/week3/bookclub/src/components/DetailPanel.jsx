import React from 'react'
import styled from 'styled-components'
import Book from './Book'

export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid #000;

  height: calc(100vh - 82px);
  width: 660px;

  position: fixed;
  z-index: 2;
  right: 0;
  bottom: 0;

  box-sizing: border-box;
  padding: 40px 120px 60px 40px;

  overflow: scroll;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86 px 20px 20px;
    width: 100vw;
    height: calc(100vh - 75px);
    bottom: unset;
  }
`

const DetailPanel = ({ book }) => {
  return (
    <Panel>
      <Book book={book} isLarge={true}></Book>
      <p>{book.description}</p>
      <p>
        <em>Published in {book.published}</em>
      </p>
    </Panel>
  )
}

export default DetailPanel
