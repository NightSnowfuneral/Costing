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
const DataName = [{key:1,"P_name":"dddd"}]
const get = new Get()
const post = new Post()
class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			pageId:'1',
			names:[],
			types:10,
			datasx:false,
			operation:40,
			height:'10%',
			pageSize:10,
			modalWidth:600
		
		}
	}
	componentDidMount(){			
			this.GetLatesFaultWorkOrderList()
			
		}
	async GetLatesFaultWorkOrderList(){
			const data= {status:'0'}
			const {actions} = this.props
			return actions.fetchPostsIfNeeded(data)
				
		}
	render(){
		
		const title = "新增签证"
		const {pageId} = this.state
		const {isFetching, names} = this.props
		const addBtn = true
		return(
			<div className="Mange">
				<div className="Mange-slect">
					
				</div>
				<div className="Formdata">
				    <Spin spinning={isFetching}
					   tip="Loading...."
					   style={{width:"100%"}}>
					<TableNav  
						dataSource={names ? names : []}
						title={title}
						DataTile={columnsAll}
						pageId={pageId}
						pageSize={this.state.pageSize}
						height={this.state.height}
						addBtnPress = {actionsBtnsAll}
						types={this.state.types}
						addBtn={addBtn}
						modalWidth={this.state.modalWidth}
						/>
				    </Spin>
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))
//<Route path="/home"   render={() =>
//	<Home>
//		<Route exact path="/defects/management" component={Management} />
//	</Home>
//}></Route>
