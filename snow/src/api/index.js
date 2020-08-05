import 'whatwg-fetch'
import queryString from 'query-string'
import objectAssign from 'object-assign'
import {message} from 'antd'
import config from '../constants/config'
import Axios from 'axios'

//Axios.defaults.timeout = 10000;
const configData ={
			      headers:{
				'Content-Type':'application/form-data'
			      }
			    }
const Ajax=function(opts){
	this.getUrlParams=opts.params
	this.getUrl=config.apiUrl.path+opts.url+"?"+queryString.stringify(this.getUrlParams)
	this.postUrl=config.apiUrl.path+opts.url
	this.data=objectAssign({},opts.data)
	this.dataDate = opts.data
	

}

Ajax.prototype.get=function(){
	const p = new Promise((resolve) =>{
				Axios.get(this.getUrl)
				    	.then(response =>{
						
						return response
						
						
						})
					.then((res) =>resolve(res))
					.catch(function(error){
						console.log(error)
						})
					
					})
							
		return p 
	}

Ajax.prototype.post=function(){
	
	const p=new Promise((resolve,reject)=>{
		Axios.post(this.postUrl,this.data)
			.then(response =>{
						
						return response
						
						
						})
					.then((res) =>resolve(res))
					.catch(function(error){
						console.log(error)
						})
					
					})
							
		return p 
	}

Ajax.prototype.postData=function(){
	
	const p=new Promise((resolve,reject)=>{
		Axios.post(this.postUrl,this.dataDate,configData)
			.then(response =>{
						
						return response
						
						
						})
					.then((res) =>resolve(res))
					.catch(function(error){
						console.log(error)
						})
					
					})
							
		return p 
	}

Ajax.prototype.put = function(){
	
	const p=new Promise((resolve,reject)=>{
		Axios.post(this.postUrl,this.data)
			.then(response =>{
						
						return response
						
						
						})
					.then((res) =>resolve(res))
					.catch(function(error){
						console.log(error)
						})
					
					})
							
		return p 
	}

	
export default Ajax

