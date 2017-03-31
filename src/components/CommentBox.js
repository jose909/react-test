import React from 'react'

import CommentList from './CommentList'
import CommentForm from './CommentForm'


export default class CommentBox extends React.Component{
	constructor() {
    super()
  }

	render() {
		return(
			<div class="commentBox">
				<CommentForm/>
				<CommentList/>
			</div>
			)
	}

}
