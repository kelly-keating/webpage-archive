import React from 'react'

const TicTacToe = () => (
  <div className='proj-blog'>
    <p>TicTacToe</p>
    {row()}
    {row()}
    {row()}
  </div>
)

const row = () => (
  <div className='row'>
    {square()}
    {square()}
    {square()}
  </div>
)

const square = () => (
  <div>P</div>
)

export default TicTacToe
