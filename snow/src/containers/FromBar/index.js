import React,{Component} from 'react'
import "./frombar.css"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router'
import { Form, Row, Col, Input, Button, Icon, Select, Cascader, DatePicker,message,Checkbox,Spin,Upload} from 'antd'
import {UploadOutlined} from '@ant-design/icons'
const FormItem = Form.Item
const {TextArea} = Input
import * as actions from '../../actions'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
import objectAssign from 'object-assign'
import classnames from 'classnames'
import {BasicFormDataAddTo,OperationaAdd,assignment,AddqzUpload } from '../../utils/config'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import Get from '../../api/Get'
import Post from '../../api/Post'
import {FormInstance} from 'antd/lib/form'
import Uploader from '../Upload/index'


var pattern = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\(\)\（\）\!\！\,\.\?\[\]\{\}\ \。\-\_\+\=\“\”\"\"\'\'\‘\'\n\r\s\，\;\；\·\、\.]/g      //正则表达式

const Option = Select.Option
const {RangePicker} = DatePicker

const post = new Post()
const get = new Get()
const props = {
		
	}

class CustomFromBar extends Component{
	
	constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.state={
			FormData:[],
			sumbitBtnLoading:false,
			data:[],
			qxdj:[],
			qxlx:[],
			shr:[],
			value:[],
			searchValue:"",
			listData:[],
			organization:[],
			department:[],
			duty:[],
			SelectDuty:[],
			titleID:{},
			TheStaging:false,
			initialValue:{},
			fileList:[],
			uploading:false,
			uploadering:false
			
		}
	}
	componentDidMount(){
		this.fileterForData()
		this.setOrganization()
	}
	
	fileterForData(){
		
		switch(this.props.types){
			case 10:
				return this.setState({FormData:BasicFormDataAddTo})
			default:
				return ""
		}
	}
	async handleUpload(){
		    const {fileList} = this.state
		    
		    const formData = new FormData()
		    fileList.forEach((file) => {
			      console.log(file)
			      formData.append('file', file,file.name);
			    });
		    this.setState({uploading:true})
		    const res = await post.UploaderData(formData)
		    if (res.status === 200){
				this.setState({uploadering:true})
			}
		    else{
				message.error('文件上传不成功')
			}
		   
	}
	async setOrganization(){   //初始值部门打类
  
     	const res= await get.organization()
	
     		this.setState({
        		organization: res.data
     			})
    		}
	async handleSubmit(e){
		const {fileList} = this.state
		const rangValue=e['DefectsTime']
		const values = {
			   ...e,
			   'DefectsTime':e['DefectsTime'].format('YYYY-MM-DD'),
			   'file':e['file'].fileList[0].name,
			   'handleUserID':e['handleUserID'] ? e['handleUserID'] :"",
			   'stationID':e['stationID'] ? e['stationID'] : "",
			   'description':e['description']? e['description']:"",
			   'Bzhu':e['Bzhu'] ? e['Bzhu'] : "",
			   'statusID':10
			   
			}
		if(fileList.length>1  ){
			return message.error("只能上传一个文件")
		}
		if(fileList.length = 0){
			return message.error("请上传一个文件")
		}
		this.handleUpload()
		console.log(values)
		const res = await post.ManageAddData(values)
		console.log(this.state.uploadering)
		console.log(res)
		if(res.status === 200 && this.state.uploadering){
			message.success('新增签证成功')
			this.onReser()
			this.props.closeModal()
			const data= {status:'0'}
			const {actions} = this.props
			return actions.fetchPostsIfNeeded(data)
			
		}
		
			
	}
	disabledDateTime() {  //禁用时间
	  return {
	    disabledHours: () => this.range(0, 24).splice(4, 20),
	    disabledMinutes: () => this.range(30, 60),
	    disabledSeconds: () => [55, 56],
	  };
	}
	disabledDate(current) { //禁用时间
		  // Can not select days before today and today
		  return current && current.valueOf() < Date.now();
	}
	range(start, end) { //数据处理
		  const result = [];
		  for (let i = start; i < end; i++) {
		    result.push(i);
		  }
		  return result;
	}
	formClassiFication(item){   //根据表单的不同分配不同的样式  或输入 或下拉
			const {data,listData,qxdj,shr,qxlx,duty,SelectDuty,organization} = this.state

			switch(item.type){
				case 'Foundpeople':
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
				
				case 'selectLevel':
							return<Input />
							break
				case 'DataPicker':
						return <DatePicker
							locale={locale}
				              		disabled={item.disabled} 
				                	format="YYYY-MM-DD"
				                	placeholder="日期"
			                		style={{width:"100%",height:'32px'}}
		          			  />				
						break
				
				case 'textareaFound':
						return <TextArea disabled={item.disabled} />
						break
				case 'selectTypeFile':
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


		
	
		
		
	handleClose(){
		this.props.closeModal()
		this.onReser()
		
	}
	defaectUpliad(){  //缺陷录入上传
		return (<div className="antd-modal-footer" style={{width:"100%", marginTop:"60px",textAlign:'right'}}>
							<Button key="back" type="ghost" size="large" onClick={this.onReser.bind(this)} >重置</Button>
							<Button className="baocun" key="submit" type="primary" htmlType="submit" size="large">提交</Button>
							<Button type="primary" size="large"  onClick={this.handleClose.bind(this)}>关闭</Button>
					</div>
			)
	}
	operationsUpload(){ //运维数据上传
		return(
				<div className="antd-modal-footer" style={{width:"100%", marginTop:"18px",textAlign:'right'}}>
							<Button key="back" type="ghost" size="large" onClick={this.onReser.bind(this)}>重置</Button>
							<Button className="baocun" key="submit" type="primary" htmlType="submit" size="large">保存</Button>
							
				</div>
			)

	}
	onReser(){
		this.myRef.current.resetFields();
		this.setState(state =>{
						const index = state.fileList.indexOf(file)
						const newFileList = state.fileList.slice();
						newFileList.splice(index,1)
						return{
							fileList:newFileList
						}
					}
					
			)
		
	}
	normFile(e){
		console.log('Upload event:',e);
		if(Array.isArray(e)){
			return e;
			
		}
		return e&& e.fileList;
	}
	render(){
		const {FormData} = this.state
		
		const props = {
			onRemove:file =>{
		
				this.setState(state =>{
						console.log(file)
						const index = state.fileList.indexOf(file)
						
						const newFileList = state.fileList.slice();
						console.log(file)
						newFileList.splice(index,1)
						return{
							fileList:newFileList
						}
					}
					
				)
			},
			beforeUpload:file =>{
				this.setState(state =>({
						fileList:[...state.fileList,file]
					})
				);
				
				return false
			}
		}
		const { uploading, fileList } = this.state
		const defect = this.defaectUpliad()
		const operations = this.operationsUpload()
		return(
			<Spin top="加载中" style={{width:"100%"}} spinning={false}>
				<Form className="flex flex-wrap" onFinish={this.handleSubmit.bind(this)}  ref={this.myRef}>
					{FormData.map((item,i)=>this.renderFormItem(item,i))}
					<FormItem lable="upload" name="file"  valueProName = "fileList" getValueForEvent={this.normFile.bind(this)} className={classnames("row","upload")}>
						<Upload  name = 'file' {...props}  >
							<Button>
								<UploadOutlined/> 文件上传
							</Button>
						</Upload>
					</FormItem>
					{this.props.types ==10 ?  defect: operations}
				</Form>
			</Spin>
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CustomFromBar))

