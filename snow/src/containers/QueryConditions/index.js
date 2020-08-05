import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import './index.css'
import { Form, Row, Col, Input, Button, Icon, Select, Cascader, DatePicker,message,Checkbox,Spin,Upload} from 'antd'
const {RangePicker} = DatePicker
const FormItem = Form.Item
import classnames from 'classnames'
import SelectData from '../SelectData/index.js'
import TableNav from '../TableNav/index.js'
import Post from '../../api/Post';
import Get from '../../api/Get';
import {columnsAll,actionsBtnsAll,FromDataAllSelect} from '../../utils/config'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/index'
import locale from 'antd/lib/date-picker/locale/zh_CN'
const get = new Get()
const post = new Post()
class AdvancedSearchForm extends Component{
	constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.state={
			expand:false,
			FormData:[],
			submitBtnLoading:false,
			data:[],
			qxdj:[],
			qxlx:[],
			shr:[],
			value:[],
			searchValue:'',
			listData:[],
			organization:[],
			status:[],
			searchValue:''
		}
	}
	componentDidMount(){
		this.setOrganization()
		this.filterFromData()
	}
	filterFromData(){  //初始化表单的名称
		    switch(this.props.type) {	   
		      case 70:
		       return   this.setState({
			FormData: FromDataAllSelect   //缺陷查询
			})
			break;	
		  }
	}
	async setOrganization(){   //初始值部门打类
  
     		const res= await get.organization()
	
     		this.setState({
        		organization: res.data
     			})
    		}
	formClassiFication(item){
		const {data,listData,qxdj,shr,qxlx,duty,SelectDuty,organization} = this.state
		switch(item.type){
				case 'selectType':
					return  <Select disabled={item.disabled} >
							{
								organization.map((item,i) =>{
									return (
											<Option key={i} value={item.P_id}>
												{item.P_name}
											</Option>
										)
								})}
							
						</Select>
					break
				case 'DataPicker':
						return <RangePicker
							locale={locale}
				              		disabled={item.disabled} 
				                	format="YYYY-MM-DD"
				                	
			                		style={{width:"100%",height:'32px'}}
		          			  />				
						break
				
				case 'textareaFound':
						return <TextArea disabled={item.disabled} />
						break
				case 'selectLevel':
						return <Select disabled={item.disabled}>
								<Option value="001">是</Option>
								<Option value="002">否</Option>
						       </Select>
						break;
				case 'FileKeytype':
						return <Upload> <Button><UploadOutlined/> 文件上传</Button></Upload>
				default:
					return <Input/>
			}
	}
	renderFormItem(item, i){   //全部的from表单外表

		let formItem=<Form.Item
						label={item.title}
						name={item.dataIndex}
						className={classnames("row", item.rowCn? item.rowCn:"row-3")}
						rules={[{required:item.require,message:"请输入"}]}  
						
						
					>
						{this.formClassiFication(item)}
						
					</Form.Item>
		return formItem
	}
	handleSubmit(e){
		
		const value = {
			...e,
			
			'Pj_id':e['Pj_id']?e['Pj_id']:null,
			'dfdw':e['dfdw']?e['dfdw']:null,
			'Accom':e['Accom']?e['Accom']:null,
			'status':'1',
			'qzsj':e['qzsj']?[e['qzsj'][0].format('YYYY-MM-DD'),e['qzsj'][1].format('YYYY-MM-DD')]:null
			
		}
		console.log(value)
		const {actions} = this.props
                actions.postStationSelect(value)
	}
	ButDataPeople(){
		const select = <div className="antd-modal-footer peopleMidal" style={{'float':'left'}}>
					<Button className="baocun" key="submit" type="primary" htmlType="submit" size="large">查询</Button>
				</div>
		return select
	}
	onReser(){
		
		this.myRef.current.resetFields();
		}
	render(){
		const {FormData} = this.state
		return (
			<div className="select">
				<Form className="ant-form ant-form-horizonatal flex flex-wrap" style={{marginBottom:8}} onFinish={this.handleSubmit.bind(this)} ref={this.myRef} autocomplete="off">
					{FormData.map((item,i)=>this.renderFormItem(item,i))}
					{this.ButDataPeople()}
				</Form>
			</div>
		)
	}
}

const mapStateToProps=state=>{
	}

const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AdvancedSearchForm))
