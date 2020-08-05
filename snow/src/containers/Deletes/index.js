import React,{Component} from 'react'
import { Form, Row, Col, Input, Button, Icon, Select, Cascader, DatePicker,message,Checkbox,Spin,Upload} from 'antd'
import './index.css'
class CaoNameBats extends Component {
	handler(){
			this.props.closeModal()
		}
	handleData(){
		switch(this.props.DataTypes){
			case 80:
				this.props.handlerName()
				this.props.closeModal()
				break;
			case 90:
				this.props.handlerName(this.props.Data)
				this.props.closeModal()
				break;
		}		
	}
	render(){
			return(
				<div className="amtdName">
					<div className="ant-confirm-body-wrapper">
						<div className="anticon anticon-question-circle atime cssName">
							<i className="anticon anticon-question-circle atime"></i>
							<span className="ant-confirm-title">你确定{this.props.DataTitle}吗?</span>
						</div>
					</div>
					<div className = "ant-confirm-btnsName">
						<Button style={{marginRight:"8px"}} onClick={this.handler.bind(this)} ><span>取消</span></Button>
						<Button type="primary" onClick={this.handleData.bind(this)}>确定</Button>
					</div>
				</div>
				)
		}
}

export default CaoNameBats
