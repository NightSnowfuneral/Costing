import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Top from'../components/TopNav/index.js'
import {Menu, Dropdown, Layout,Breadcrumb} from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const {SubMenu} = Menu;
const {Header, Footer, Sider, Content} = Layout
import './home.css'
import 'antd/dist/antd.css';

class Home extends Component{
	render(){
		
		return (
			
		<div className="dashboard flex flex-column dashboardspeaciol">
			<div className="header flex-0">
				<div className="head-name">
					<div className="head_name_sys">
						
					</div>
				</div>
				<div className="head_flex">
					   <Top />
				</div>	
				
				<div className="">
				</div>	
			</div>
			<div className= "content flex-l flex">
				<div className="nav">
					
				</div>
				<div className="wrapper flex-1 flex">
					<div className="Bram">
						<Breadcrumb style={{ margin: '16px 10px' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					      </Breadcrumb>
					</div>
					<div className="wra-cont">
						conetng
					</div>
				</div>
			</div>
			<div className="footer flex-0">
			</div>
		</div>
		)		
	}

}

export default Home
