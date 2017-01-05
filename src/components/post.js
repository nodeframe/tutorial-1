import React from 'react';

function handleChange(s){
	return (e)=>{
		s.setState({value:e.target.value});
	};
}

export class Post extends React.Component{

	constructor(){
		super();
		this.state = {
			value:"Hello"
		};
	}

	handleChange(e){
		this.setState({value:e.target.value});
	}

	onSubmitClick(){
		this.props.handleAddPost({message:this.state.value});
	}

	render(){
		return (
			<div>
				<input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
				<button onClick={this.onSubmitClick.bind(this)}>ADD</button>
			</div>
		);
	}

}
