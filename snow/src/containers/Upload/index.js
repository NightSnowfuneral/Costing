import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import { Form, Row, Col, Input, Button, Icon, Select, Cascader, DatePicker,message,Checkbox,Spin,Upload} from 'antd'
import {UploadOutlined} from '@ant-design/icons'
const FormItem = Form.Item
import moment from 'moment'
import config from '../../constants/config'
import Axios from 'axios'
import Get from '../../api/Get'
import Post from '../../api/Post'
const post = new Post()
const get = new Get()
class UploadData extends Component{
	constructor(props){
		super(props);
		this.state={
			fileList:[],
			uploading:false
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
		    console.log(res.data)
	}
	normFile(e){
		console.log('Upload event:',e);
		if(Array.isArray(e)){
			return e;
			
		}
		return e&& e.fileList;
	}
	render(){
		const props = {
			onRemove:file =>{
				this.setState(state =>{
						const index = state.fileList.indexOf(file)
						const newFileList = state.fileList.slice();
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
				this
				return false
			}
		}
		const { uploading, fileList } = this.state
		
		return (
				<div className="clearfix row row-3">
					<FormItem lable="upload" name="file"  valueProName = "fileList" getValueForEvent={this.normFile.bind(this)}>
						<Upload  name = 'file' {...props}  >
							<Button>
								<UploadOutlined/> Click to Upload
							</Button>
						</Upload>
					</FormItem>
					<Button type="primary" onClick={this.handleUpload.bind(this)}  style={{marginTop:16}}>
						uploaddsfdgd
					</Button>	
				</div>
			)
	 }
}

export default UploadData
