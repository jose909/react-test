import React from 'react'



export default class CommentForm extends React.Component{
	constructor(){
		super{}
	}

	reder() {
		return(
			<form class="commentForm">
			<input type="text" name="author" placeholder="Su Nombre"/>
			<input type="text" name="text" placeholder="Firma! :D"/>
			<input type="hidden" name="id" value={Date.now()} />	
			<input type="submit" value="Enviar! :D"/>			
			</form>
			)
	}

}
