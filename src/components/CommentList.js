import React from 'react'

import CommentForm from './Comment'

export default class CommentList extends React.Component{
	constructor(){
		super{}
	}

	reder() {
		return(
			<div class="comment">
			<h2>Nombre Autor</h2>
			<p>Comment</p>
			</div>
			)
	}

}
