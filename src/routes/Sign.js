import $ from 'jquery'
import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

import CommentStore from '../stores/CommentStore'

import CommentBox from '../Components/CommentBox'

import CommentActions from '../actions/CommentActions'

@ReactMixin.decorate(Reflux.connect(CommentStore, 'comments'))
export default class Sign extends React.Component {

	constructor() {
    super()
  }

	componentDidMount(){
		CommentActions.fetchComments()
	}

	onSubmitSendComment(ev){
		ev.preventDefault()
		let data = $(ev.target).serializeArray()
		let comment = {
			author: data[0].value,
			text: data[1].value,
			id: data[2].value
		}
		CommentActions.sendSigh(comment)
	}

	render() {
			if (!this.state.comments) {
				return(<h1>Loadin</h1>)
			} else {
				return(
					<div class="sign">
						<CommentBox onSubmit={this.onSubmitSendComment.bind(this)} data={ this.state.comments } />
					</div>
			)
		}
	}
}