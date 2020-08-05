import React,{Component} from 'react';
import {message, Input,Button, Checkbox} from 'antd';
import './index.css';
import 'antd/dist/antd.css';
import axios from 'axios';
import Post from '../../api/Post';
import Get from '../../api/Get';
import Axios from 'axios';
const post = new Post()
const get = new Get()
class Login extends Component{
	constructor(props){
	super(props);
	this.state={
			indentifyCode:"",
			phone:"",
			password:"",
			btnLoading:false,
			name:'lock'
			
		}
	}
	componentWillUnmount(){
		clearInterval(this.timer)
	}
	handleSubmit(e){
		e.preventDefault()
		const {phone,password,indentifyCode}= this.state
		const data = {phone,password}
		
		this.submintted()
		
	}
	handleChange(name,even){
		let newState={}
		newState[name] = even.target.value
		this.setState(newState)
		
	}
	submintted(){
		const {phone, password, indentifyCode} = this.state
		
		if (password === ""){
			
			return
		}
		this.setState({btnLoading:true})
		const data={phone,password}
		
		//this.AxiosData(data)
		this.AxiosGet(data)
		
		
		
		
	}
	 async AxiosGet(data)
	{
	  const  {name} = this.state
	 // const res = await get.commonData(name)
	  const phone = this.state.phone
	  const res =await post.adminSession(data)
	  console.log(res)
	  
	  
	  if(res.code == 200){
		sessionStorage.LoginId = phone
		message.success("success")
		
		this.time = setTimeout(() =>{
			this.props.history.replace({pathname:'/',query:{data:res.data[0].power}})
		},800)
	   }
	   else{
		    //this.showMessage("error","fail")
		    this.setState({btnLoading:false})
		}		
	  
	}
	showMessage(type,content){
		switch(type){
			case "warning":
				message.warning(content)
			break;
			case "error":
				message.err(content)
			break;
			default:
				message.success(content)
		}
	}
	AxiosData(data){
		console.log(data)
		Axios.get('http://172.16.10.87:3652/hello?name=lock')
		.then(	function(response){
				console.log(response)
				
				message.success("success")
			})
		.then((res) =>resolve(res))
		.catch(function(error){
			console.log(error)
		})
	}


	
	render(){
		const {btnLoading} = this.state
		return(
			
			<div className="loginDiv">
				<div className="href">
				</div>
				<div className="login">
					<div className="login-name">
					 	<h1 align="center">管理登陆界面</h1>
					</div>
					 <form onSubmit={this.handleSubmit.bind(this)}>
						<dl className="login_box">
							<dd>
								<Input type="text" placeholder="帐号" className="login_textbx" onChange={this.handleChange.bind(this,'phone')} />
							</dd>
							<dd>
								<Input.Password type="text" placeholder="秘密" className="login_textbx" onChange={this.handleChange.bind(this,'password')} />
							</dd>
							<dd className="button-sum">
								<button disabled={btnLoading} className="submit_btn" type="sumbit">
									立即登陆
								</button>
							</dd>
						</dl>
					</form>
					
				</div>
			</div>
		)
	}
}

export default Login
