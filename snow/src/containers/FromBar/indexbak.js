import React,{Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { Form, Row, Col, Input, Button, Icon, Select, Cascader, DatePicker,message,Checkbox,Spin } from 'antd'
import * as actions from '../../actions'
import moment from 'moment'
import objectAssign from 'object-assign'
import classnames from 'classnames'
import {BasicFormDataAddTo,OperationaAdd,assignment } from '../../utils/config'

import Get from '../../api/Get'
import Post from '../../api/Post'



var pattern = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\(\)\（\）\!\！\,\.\?\[\]\{\}\ \。\-\_\+\=\“\”\"\"\'\'\‘\'\n\r\s\，\;\；\·\、\.]/g      //正则表达式
const FormItem = Form.Item
const Option = Select.Option
const {RangePicker} = DatePicker

const post = new Post()
const get = new Get()
class CustomFromBar extends Component{
	constructor(props) {
		super(props);
		this.state={
			FormData:[],//表单标题
			submitBtnLoading:false,
			data:[],//所有初数据
			qxdj:[],//缺陷等级
			qxlx:[], //缺陷类型
			shr:[],   //处理人
			value:[],                           
			searchValue:'',
			listData:[],
			organization:[], //组织机构
			department:[], //部门下人员
			duty:[],//值班人员
			SelectDuty:[], //所有的排班人员
			titleID:{}, //
			TheStaging:false

		}
		
	}
	componentDidMount() {    //赋值
			
			
		}
	

	render(){	
		const {FormData,listData,searchValue,data} = this.state
		
		
		return(
				
				<Spin
					tip="加载中"
					spinning={true}
					style={{width:"100%"}}
				>
					<Form className="flex flex-wrap" >
						
						
					</Form>
				</Spin>

			)
		}
	}





export default  CustomFromBar
