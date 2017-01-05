import React from 'react';

export class PostList extends React.Component{
	render(){
		return (
			<ul>
				{this.props.list.map((r,i)=>
					<li key={i}>{r.message} <button onClick={this.props.handleRemovePost.bind(null,i)}>x</button></li>
				)}
			</ul>
		);
	}
}

//[function].bind([context],...[args])
