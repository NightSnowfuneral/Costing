import React,{Component} from 'react'
import {Modal,Button,Spin} from 'antd'
import classnames from 'classnames'
import FromBar from '../FromBar/index'
import FromEditBar from '../FromEditBar/index'
import CaoNameBar from '../Deletes/index'
class Modalbar extends Component{
	handleOk(){
			this.props.closeModal()
			

		}
	handleCancel(e){
		this.props.closeModal()
	}
	handlerName(e){
		this.props.DatauploadName(e)
	}
	addBtn(){
			const addBtnHtml=<FromBar
						modalVisible={this.props.visible}
						closeModal={this.handleCancel.bind(this)}
						request={this.props.request}
						type={this.props.type}
						types={this.props.typesData}
					>
					</FromBar>
			return addBtnHtml
		}
	eddit(){
		        const editBtnHtml=<FromEditBar 	modalVisible={this.props.visible}
						closeModal={this.handleCancel.bind(this)}
						request={this.props.request}
						type={this.props.type}
						types={this.props.typesData}
						statusID = {this.props.statusID}
						details = {this.props.details}
						stateIDName = {this.props.stateIDName}
						detasx = {this.props.detasx}
						Data={this.props.Data}
							> 
					</FromEditBar>
			return editBtnHtml
		}
	deletes(){
		const deletes = <CaoNameBar	closeModal={this.handleCancel.bind(this)}
						DataTitle = {this.props.DataTitle}
						modalVisible = {this.props.visible}
						Data={this.props.Data}
						DataTypes = {this.props.DataTypes}
						handlerName={this.handlerName.bind(this)}
					></CaoNameBar>
		return deletes
	}
	workID(){
		
			switch(this.props.NameType){
				case 10:
					return this.addBtn()
				case 30:
					return this.eddit()
				case 40:
					return this.deletes()
				default:
					return
			}
		}
	render(){
			return(
				<Modal
					width={this.props.modalWidth}
					height={this.props.modalHeight}
					title={this.props.modalTitle}
					style={{ top: "14%" }}
					visible={this.props.visible}
					wrapClassName={classnames({"active":this.props.typesData})}
					onOk= {this.handleOk.bind(this)}
					onCancel = {this.handleCancel.bind(this)}
					footer={false}
					maskClosable={false}
					
				>
				{this.workID()}
						
						
				</Modal>
			)
		}



}


export default Modalbar
