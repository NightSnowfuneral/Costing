import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import NavTop from './TopNav/index.js'
import NavBar from './NavBar/index.js'
import Nav2 from './jsdemo'
import {Menu, Dropdown, Layout,Breadcrumb} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const {SubMenu} = Menu;
const {Header, Footer, Sider, Content} = Layout
import './home.css'
import 'antd/dist/antd.css';
import Post from '../api/Post';
import Get from '../api/Get';
import {ModuleMenu,TitMenu} from '../utils/config' 
const post = new Post()
const get = new Get()
class Home extends Component{
	constructor(props){
			super(props);
			this.state={
				skinIndex:0,
				data:[]
				
			
		}
	}
	componentDidMount(){
		
	//	this.NanData()
	}

	//async NanData(){
//		const replac= this.props.location.query.data
		//const res = await get.commonNav(replac)
		//this.setState({
		//		data:res
		//	})
		
	//}	
	render(){
		
		return (			
			<div className="dashboard flex flex-column dashboardspeaciol">
			     <div className="header flex-0">
				<div className="head-name">
					<div className="head_name_sys">
						<Nav2 />
					</div>
				</div>
				<div className="head_flex">
					<NavTop data={TitMenu}/>
				</div>	
				
				<div className="">
				</div>	
			</div>
			<div className= "content flex-l flex">
				<div className="nav">
					<NavBar  data={ModuleMenu}/>
				</div>
				<div className="wrapper flex-1 flex">
				
					<div className="wra-cont">
						{this.props.children}
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
