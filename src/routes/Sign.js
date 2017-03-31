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

	render() {
		return(
			<div class="sign">
				<CommentBox/>
			
			</div>
		)
	}
}