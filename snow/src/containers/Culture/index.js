import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import {From,Row,Col,Input,Button,Icon,Select,Casscader,DatePick,message,Checkbox,Spin} from 'antd'
import SelectData from '../SelectData/index.js'
import TableNav from '../TableNav/index.js'
import Post from '../../api/Post';
import Get from '../../api/Get';
import {columnsAll,actionsBtnsAll} from '../../utils/config'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/index'
import QueryConditions from '../QueryConditions/index'
class Query extends Component{
	constructor(props){
			super(props);
			this.state={
				loading:false,
				request:true,
				type:70,
				pageId:'1',
				types:10,
				detasx:true,
				operation:20,
				pageSize:20,
				modalWidth:500			
			}
		}
	componentDidMount(){			
			this.GetLatesFaultWorkOrderList()
			
		}
	async GetLatesFaultWorkOrderList(){
			const data= {status:'0'}
			const {actions} = this.props
			return actions.postStationSelect(data)
				
		}
	ProjectName(name){
		
		
			name.map((list)=>{
					list.P_name=this.Project(list.Pj_id)
				})
		
		console.log(name)
		return name
	}
	Project(Pj_id){
		switch(Pj_id){
			case "001":
				return "龙港A27/A31"
			case "002":
				return "龙港A19"
			case "003":
				return "龙港下涝"
			
			default:
				return 
		}
	}
	render(){
		const {pageId} = this.state
		const Query = true
		const {isFetch,names} = this.props 
		const NamesData = this.ProjectName(names)
		return(
			 <div className="fault flex flex-1 Query">
				<Spin tip="Loading" style={{width:'100%'}} delay={100} spinning={this.state.loading}>
					<QueryConditions type={this.state.type}>
						
					</QueryConditions>
					<Spin
							tip="loading...."
							style={{width:"100%"}}
							delay={100}
							spinning={this.props.isFetching}
						>
								<TableNav
									dataSource={NamesData} 
									pageId={pageId}
									select={this.state.request}
									DataTile={columnsAll}
									addBtnPress = {actionsBtnsAll}
									types={this.state.types}
									detasx={this.state.detasx}
									operation = {this.state.operation}
									pageSize={this.state.pageSize}
									modalWidth={this.state.modalWidth}
									
								
							/>
						</Spin>
				</Spin> 
				
		         </div>
			)
	}
}
const mapStateToProps=state=>{
	const {PostSelect} = state
	const {names,isFetching} = PostSelect || {names:[],isFetching:false}
	return {
		isFetching,
		names
	}
}
const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Query)

