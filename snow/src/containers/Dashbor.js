import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import {From,Row,Col,Input,Button,Icon,Select,Casscader,DatePick,message,Checkbox,Spin} from 'antd'



class SelectData extends Component{
	render(){
		return(
			<div className="top">
				{this.props.children}
			</div>
		)
	}
}





export default SelectData;
