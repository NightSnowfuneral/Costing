import React,{Component} from 'react'
import {Link} from 'react-router'

class Home extends Component{
	render(){
		const menus = this.props.home
		return (
			<div className='home'>
				<div className="banner">
					<a href="/login">login</a>
				</div>
			</div>
		)
	}
	
}

export default Home
