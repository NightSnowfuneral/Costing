import objectAssign from 'object-assign'
import Ajax from './index'
import config from '../constants/config'

const Get = function(){
	this.commonDataOpts={url:config.apiUrl.commonData} //新增工单初始值
	this.commonNavOpts={url:config.apiUrl.commonNav}
	this.Taskopts={url:config.apiUrl.Task}
	this.Organizationopts={url:config.apiUrl.Organization}
	this.TaskOpts = {url:config.apiUrl.Tasks}
	}
Get.prototype.commonData=function(value){
	const opts = this.commonDataOpts
	const params = {name:value}
	opts.params = objectAssign(params)
		
	//const ajax=new Ajax(opts)

	return "ddd"
	//return ajax.get()
	//			.then(res=>res)
}

Get.prototype.commonNav=function(value){
	const opts = this.commonNavOpts
	const params = {power:value}
	opts.params = objectAssign(params)
	
	const ajax = new Ajax(opts)
		return ajax.get()
				.then(res=>res)
}
Get.prototype.Task = function(params){
	const opts = this.Taskopts
	opts.params = objectAssign({},params)
	const ajax = new Ajax(opts)
		return ajax.get()
				.then(res=>res)
	}
Get.prototype.organization=function(){
		const opts = this.Organizationopts
		const ajax = new Ajax(opts)
		return ajax.get()
			.then(res=>res) 

	}
Get.prototype.tasks = function(params){
		
		const opts = this.TaskOpts
		opts.params = {id:params}
		const ajax = new Ajax(opts)
		return ajax.get()
			.then(res => res)
		
	}

export default Get


