import objectAssign from 'object-assign'
import Ajax from './index'
import config from '../constants/config'

const Post = function(){
	this.adminSessionOpts = {url:config.apiUrl.adminSession}
	this.ManageAddDataOpts= {url:config.apiUrl.ManageAddData}
	this.UploaderOpts = {url:config.apiUrl.Uploader}
	this.ManageEditDataOpts = {url:config.apiUrl.ManageEditData}
	this.postSearchOpts = {url:config.apiUrl.search} //搜索缺陷工单功能
	
}	

Post.prototype.adminSession = function(data){
	const opts = this.adminSessionOpts
	opts.data = objectAssign({}, data)
	
	const ajax = new Ajax(opts)
	
	return  ajax.post()
			.then(res => res)
}
Post.prototype.ManageAddData=function(data){
	const opts = this.ManageAddDataOpts
	opts.data = objectAssign({}, data)
	
	const ajax = new Ajax(opts)
	
	return  ajax.post()
			.then(res => res)
}
Post.prototype.UploaderData = function(data){
	const opts = this.UploaderOpts
	opts.data = data
	const ajax = new Ajax(opts)
	return ajax.postData()
			.then(res => res)
}

Post.prototype.ManageEditData = function(data){
	const opts = this.ManageEditDataOpts
	opts.data = objectAssign({}, data)
	
	const ajax = new Ajax(opts)
	
	return  ajax.post()
			.then(res => res)
}
Post.prototype.Delectshoift = function(id){
	const opts = {}
	opts.url = config.apiUrl.shift_record + '/' +id
	const ajax = new Ajax(opts)
	return  ajax.put()
			.then(res => res)
}
Post.prototype.postSearch = function(data){  //搜索功能
	const opts = this.postSearchOpts
	opts.data = objectAssign({}, data)
	const ajax = new Ajax(opts)
	return ajax.post()
		.then(res => res)
}

export default Post;

