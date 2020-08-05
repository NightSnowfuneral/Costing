import React,{Component} from 'react'
import "./edit.css"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router'
import { Form, Row, Col, Input, Button, Icon, Select, Cascader, DatePicker,message,Checkbox,Spin,Upload} from 'antd'
import {UploadOutlined} from '@ant-design/icons'
const FormItem = Form.Item
const {TextArea} = Input
import config from '../../constants/config'
import * as actions from '../../actions'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
import objectAssign from 'object-assign'
import classnames from 'classnames'
import {BasicFormDataAddTo,OperationaAdd,assignment,AddqzUpload,OrderTypeOptions } from '../../utils/config'
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

const pathData = "http://172.16.10.20:5678/pdf/"
class FromEditBar extends Component{
	constructor(props){
	super(props);
	this.myRef = React.createRef();
	this.state={
		FormData:[],
		submitBtnLoading:false,
		data:[],
		FromDataName:[],
		value:"",
		fileList:[],
		listData:[],
		station:[],
		organization:[],
		NameData:[],
		itemValue:false,
		isFetching:false,
		StationType:true,
		fetching:true,
		uploading:false,
		uploadering:false
		}
	}
	componentDidMount(){
		
		this.setOrganization()
		this.handler()
		
		
	}
	
	componentWillReceiveProps(nextProps){
		const districtAll = nextProps.names
		if(districtAll !== this.props.names && districtAll !== undefined){
			this.setState({
				listData:[],
				FromDataName:districtAll,
				fetching:true,
			
					
			})
			this.onReser()
			this.FromData(districtAll)
			this.handler()
		}

		if(districtAll == undefined){
			this.setState({
				FormDataName:[],
				FormData:[],
				
			})
			this.onReser()
			this.handler()
		}	
		
	}
	FromData(options){
		let arry = []
		let miaoshuData = []
		if(this.props.statusID==10){
			BasicFormDataAddTo.map((item,i)=>{
				this.setStateDisable(item)
				this.setStatecreateUserName(item,options)
				arry.push(item)
			})
		}
		this.setState({FormData:arry})
	}
	setStatecreateUserName(item,options){
			
			if(item.dataIndex =='createUserName'){
			
				
				item.value = options
			}
		}
	setStateDisable(item){
		if(this.props.details){
			item.disabled = true
		}
		else{
			item.disabled = false
		}
	}
	handlerName(districtAll){
			if(districtAll.qz_id){
					return districtAll
				}
			else{
				return []
			}
		}
	handleNameData(){
		this.setState({
			fetching:false
		})
	}
	handler(){
		  setTimeout(()=>{
				this.handleNameData()
			},600)
		}
	fileterForData(){
		
		switch(this.props.types){
			case 10:
				return this.setState({FormData:BasicFormDataAddTo})
			default:
				return ""
		}
	}
	async setOrganization(){   //初始值部门打类
  
     		const res= await get.organization()
	
     		this.setState({
        		organization: res.data
     			})
    		}
	defaectUpliad(){  //缺陷录入上传
		return (<div className="antd-modal-footer" style={{width:"100%", marginTop:"60px",textAlign:'right'}}>
							<Button key="back" type="ghost" size="large" onClick={this.onReser.bind(this)} >重置</Button>
							<Button className="baocun" key="submit" type="primary" htmlType="submit" size="large">提交</Button>
							<Button type="primary" size="large" >关闭</Button>
					</div>
			)
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
	normFile(e){
		//console.log('Upload event:',e);
		if(Array.isArray(e)){
			return e;
			
		}
		return e&& e.fileList;
	}
	onReser(){
		
		this.myRef.current.resetFields();
		}
	UploadLocalName(data){
		return data
	}
	
	Uploader(){
		const Data = this.props.Data.file
		//console.log(Data)
		const logoFileList = [{uid:-1,url:Data,name:Data.replace(pathData,""),status:'done'}]
		const {fileList} = this.state
		const props = {
			defaultFileList: [
					    {uid:-1,url:Data,name:Data.replace(pathData,""),status:'done'}
					  ],
			
			onRemove:file =>{
				this.setState(state =>{	
					
						const index = state.fileList.indexOf(file)
						const newFileList = state.fileList.slice(-1);
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
		const upload = <FormItem lable="upload" name="file"  valueProName = "fileList" getValueForEvent={this.normFile.bind(this)} className={classnames("row","upload")}>
						<Upload   {...props}  >
							<Button>
								<UploadOutlined/> 文件上传
							</Button>
						</Upload>
				</FormItem>
		return upload
	}
	handleClose(){
		this.props.closeModal()
		this.onReser()
		
	}
	defaectUpliad(){  //缺陷录入上传
		return (<div className="antd-modal-footer" style={{width:"100%", marginTop:"60px",textAlign:'right'}}>
							
							<Button className="baocun" key="submit" type="primary" htmlType="submit" size="large">提交</Button>
							<Button type="primary" size="large" onClick={this.handleClose.bind(this)}>关闭</Button>
					</div>
			)
	}
	async handleUpload(){
		    const {fileList} = this.state
		    //console.log(fileList)
		    const formData = new FormData()
		    fileList.forEach((file) => {
			//      console.log(file)
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
	async handleSubmit(e){
			const {fileList} = this.state
			const Data = this.props.Data
			console.log(Data.qz_id)
			console.log(fileList)
			
			const rangValue=e['DefectsTime']
			const values = {
			   ...e,
			   'qz_id':Data.qz_id,
			   'DefectsTime':e['DefectsTime'].format('YYYY-MM-DD'),
			   'file':e['file'] !== undefined && e['file'].fileList[0] !== undefined  ? e['file'].fileList[0].name : Data.file.replace(pathData,""),
			   'handleUserID':e['handleUserID'] ? e['handleUserID'] :"",
			   'stationID':e['stationID'] ? e['stationID'] : "",
			   'description':e['description']? e['description']:"",
			   'Bzhu':e['Bzhu'] ? e['Bzhu'] : ""
			}
				
			//console.log(fileList)
			//console.log(values)
			//if(fileList.lenth = 1){
			//this.setState({uploadering:true})
				
				
			//}
			if(fileList.length >1 || fileList.length >=1){
				
				this.handleUpload()	
			}
		  	const res = await post.ManageEditData(values)
			console.log(res)
			console.log(this.state.uploadering)	
		
			if(res.status === 200){
				message.success('编辑成功')
				this.onReser()
				this.props.closeModal()
				const data= {status:'0'}
				const {actions} = this.props
				actions.fetchPostsIfNeeded(data)
				actions.postStationSelect(data)
			
			}
			
			
			
			
		}
	AccomDataJod(accom){
		let  actd = ""
		OrderTypeOptions.map((item,i)=>{
			if(item.label == accom){
				actd = item.value	
			}
		})
		return actd
	}
	DateSelect(Data){
			return moment(Data,'YYYY-MM-DD')
		}
	deferc(){
		const str = {}
		const Data = this.props.Data
		
		str.createUserName = Data.Pj_id
		str.qxdj = Data.qzbh
		str.qxlx = Data.qzje
		str.AccomData = this.AccomDataJod(Data.Accom)
		str.DefectsTime = this.DateSelect(Data.Data)
		str.Dfdw = Data.dfdw
		str.handleUserID = Data.qznr
		str.stationID = Data.xxnr
		str.description = Data.yyfx
		str.Bzhu = Data.bz

		return str
	}
	
	render(){
		
		const {FormData} = this.state
		const Data = this.props.Data
		//console.log(Data.qz_id)
		return(
			<Spin tip="加载中" spinning={this.state.fetching} style={{width:"100%"}} delay={100}>
				<Form className="flex flex-wrap" onFinish={this.handleSubmit.bind(this)} ref={this.myRef} initialValues={this.deferc()}>
					{FormData.map((item,i)=>this.renderFormItem(item,i))}
					{this.Uploader()}
					{this.defaectUpliad()}
				</Form>
			</Spin>
		)
	}
}
const mapStateToProps=state=>{
	const {journalData} = state
	const { names,isFetching} = journalData || {names:[],isFetching:true}

	return {
		isFetching,
		names
		
	}
}
const mapDispatchToProps=(dispatch)=>({
	actions:bindActionCreators(actions,dispatch)
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FromEditBar))
