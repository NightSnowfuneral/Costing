import React from "react";
import {Menu, Dropdown, Layout,Breadcrumb} from 'antd';
import {Link} from 'react-router-dom'
const {SubMenu} = Menu;

class Login extends React.Component{
		constructor(props){
			super(props);
			this.state={
				current:'1',
				openKeys:[]
			}
		}			
		handleClick(e){
			this.setState({current:e.key})
		}
		render(){
			const {data} = this.props
			let subId = 0
			return (
			<Menu
			theme="dark"
			className="navbar"
		        mode="horizontal"
			defaultSelectedKeys={['1']}
		        onClick={this.handleClick.bind(this)} 
		        style={{background:'transparent' }}
		        
		    >
		      	{data.map((item,i)=>{
		      		subId+=1
		      		return (
		      			<Menu.Item key={subId}>
						<Link to={item.linkTo}>{item.name}</Link>
					</Menu.Item>
		      		)
		      	})}
		    </Menu>
		)
	}
}

export default Login
