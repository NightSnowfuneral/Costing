import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import {From,Row,Col,Input,Button,Icon,Select,Casscader,DatePick,message,Checkbox,Spin,Table} from 'antd'
import Modal from '../Modal/index'
import moment from 'moment'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router'
import * as actions from '../../actions'
import Post from '../../api/Post';
import Get from '../../api/Get';
const get = new Get()
const post = new Post()
class FormData extends Component{
	constructor(props){
		super(props);
		this.state={
			columns:[],
			dataSource:[],
			showModal:false,
			modalWidth:"",
			modalHeight:"",
			modeTitle:"",
			request:false,
			statusId:"",
			details:false,
			type:false,
			workID:true,
			Rule:false,
			data:[],
			Data:"",
			stateIDName:"",
			DataTitle:"",
			DataTypes:10,
			NameType:Number

			
		}
	}
	componentDidMount(){		
			this.setColums()
			this.setDataSource(this.props.dataSource)
			
		}
	componentWillReceiveProps(nextProps){
		if(nextProps.dataSource.length !==0){
			this.setDataSource(nextProps.dataSource)
			
		}
		else{
			this.setState({
					dataSource:[]
				})
			}
	}
	
	setDataSource(dataSource){
			
			
			
			dataSource.map((item,i)=>{
				item.key = i+1
				item.Data = this.datefect(item.qzsj)
				item.file = this.FileLocal(item.file)
				
				})
			dataSource.sort(function(a,b){
					return a.Data < b.Data ? 1:-1
				})
			
			this.setState({
					dataSource
				})
			
			
		}
	FileLocal(item){
			
			return item
		}
	datefect(item){
		   const data = new moment(item).format('YYYY-MM-Do')
		   const reg = new RegExp("日")
		   const datatime = data.replace(reg,"")
		   return datatime
		}
	addBtn(){
		const {actions,pageId} = this.props
		this.showModal()
		switch(this.props.types){
			case 10:
				return this.setState({modalWidth:"960px",modalHeight:"458px",modalTitle:"新增工单",NameType:10})
			
			default:
				return 
		}
		
	}
	async deleteBtn(text){
		if(this.props.types ==10){
			const res = await post.Delectshoift(text)
			if(res.data.status ==200){
				const data= {status:'0'}
				const {actions} = this.props
				actions.postStationSelect(data)
				actions.fetchPostsIfNeeded(data)
				
				message.success(res.data.info)	
			}
		}
	}
	deletes(text){
		
		this.showModal()
		this.setState({modalWidth:"300",modalTitle:"提示",DataTitle:'删除',DataTypes:90,workID:false,NameType:40,Data:text.qz_id})
	}
	editBtn(text){
		
		  const {actions} = this.props
		 
		  this.showModal()
		  switch(this.props.types){
				case 10:
					        this.setState({modalWidth:"960px",modalTitle:"编辑工单",request:true,Data:text,statusId:text.statusID,NameType:30})
						actions.requestGetDetail(text.qz_id)
						
					break
				default:
					return
					
				
			}	
		}
	showModal(){
		this.setState({
			showModal:true
		})
	}
	filterBar(){
			if(this.state.dataSource.length ==0){
					return 
				}
			else{

			return this.state.dataSource
			}
		}
	handleClickBtn(funIndex,text){
		
			switch(funIndex){
				case "0":
					return this.editBtn(text)
					break
				case "9":
					return this.deletes(text)
					break
				case "8":
					return this.detailsBtn(text)
					break
				default:
					return ""
			}
		}
	setBtn(text,record){
			const {pageId,addBtnPress} = this.props
			let btns = []
			if(addBtnPress){
				btns = addBtnPress
			}
			return(
				<span>
					{btns.map((item,s)=>{
						return (
								<a href="javascript:;" onClick={this.handleClickBtn.bind(this,item.funIndex,text)} style={{padding:"0 3px"}}>
									{item.name}
								</a>
							)
					})}
				</span>
			)
		}
	setColums(){
			const {pageId} = this.props
			
			let columns = this.filterFun(this.props.DataTile,pageId)
			let columsed = this.filerFunfile(columns)
			const actionsColums = [{title:'操作',width:'150',key:'operation',render:(text,record) => this.setBtn(text,record)}]
		
			columns = columsed.concat(actionsColums)
			
			this.setState({
				columns
			})
				
		}
	filerFunfile(data){
		    data.map((item)=>{
					if(item.dataIndex =='file'){
						item.render = text=> <a href={text} target="_blank">文件</a>
					}
				})
		
		    return data
		}

	filterFun(lists,index){
			
			let array=[]
			lists.map((list)=> {
					list.pageId.map((item)=>{
						if(item == index){
							array.push(list)
						}
					})
				})
			
			return array
		}
	pageSize(){
			switch(this.props.pageSize){
				case 10:
					return 10
					break;
				case 20:
					return 10
					break;
				case 30:
					return 5
					break;
			}
		}
	closeModal(){
		const {actions} = this.props
		
		this.setState({
				showModal:false
			})
	}
	render(){
		
		const {columns} = this.state
		const {dataSoure,modalWidth,modalTitle,request,showModal,statusId,details,type,workID,rule,data,stateIDName,modalHeight,Data} = this.state
		return(
			<div className="FormData-all">
				<div className="add">
					{this.props.addBtn &&<Button className="editable-add-btn" type="ghost" onClick={this.addBtn.bind(this)}>
						{this.props.title}
					</Button>}
				</div>
				<div className="MangTbal">
					<Table columns = {columns}
						dataSource={this.filterBar()}
						scroll={{y:this.props.height}}
						bordered
						align="center"
						pagination={{pageSize: this.pageSize()}}
						scroll={{y:this.props.modalWidth}}
						/>
					<Modal 
						ref="modal"
						modalWidth={modalWidth}
						modalHeight={modalHeight} 
						modalTitle={modalTitle}
						closeModal={this.closeModal.bind(this)}
						visible={showModal}
						NameType={this.state.NameType}
						typesData={this.props.types}
						statusID={statusId}
						Data={Data}
						DatauploadName={this.deleteBtn.bind(this)}
						DataTypes={this.state.DataTypes}
						DataTitle={this.state.DataTitle}
					/>
					
				</div>
					
					
			</div>
		)
	}
}

const mapStateToProps=state=>{
	const {station,AllPressmisonm} = state
	const { names,isFetching} = station || {names:[],isFetching:true}

	return {
		isFetching,
		names,
		AllPressmisonm
	}
}
const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FormData))
