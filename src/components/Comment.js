import React from 'react'

export default class Comment extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div class='comment'>
        <div class="alert alert-success">
          <h2>Nombre Autor</h2>
          <p>Comment</p>
        </div>
      </div>
    )
  }

}