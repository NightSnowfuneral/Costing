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
			let subId=0,menuId=0
			return (
			<Menu
				className="navbar"
		        mode="inline"
		        onClick={this.handleClick.bind(this)} 
		        style={{ width: 180,background:'transparent' }}
		        
		    	>
		      	{data.map((item,i)=>{
		      		subId+=1
		      		return (
		      			<SubMenu className="menu_sub" key={"sub"+subId} title={<span><i className={item.iconCn}></i><span>{item.name}</span></span>}>
		      			    {item.menu ?item.menu.map((itemone,i)=>{
		      			    	menuId+=1
		      			    	return (
		      			    		<Menu.Item className="menu_item" key={menuId}>
		      			    			<Link to={itemone.linkTo} state={{name:itemone.childrenModule}}>{itemone.text}</Link>
		      			    		</Menu.Item>
		      			    	)
		      			    }) : ""}
				        </SubMenu>
		      		)
		      	})}
		    </Menu>
		)
	}
}

export default Login
