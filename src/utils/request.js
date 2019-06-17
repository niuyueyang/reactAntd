import env from '../env/env.js'
import axios from "axios";
import { message } from 'antd';
console.log(env.baseUrl)
const service=axios.create({
	baseURL:env.baseUrl,
	timeout:5000,
})

//请求拦截
service.interceptors.request.use(config=>{
	config.method==='post'?config.data={...config.data}:config.params={...config.params};
	config.headers['token']='123456789';
	return config;
},error=>{
	Promise.reject(error);
})

//响应拦截
service.interceptors.response.use(
	response=>{
		if(response.data.code=='0'){
			return response.data
		}
		else{
			message.error('请求失败');
		}
	},
	error=>{
		console.log(error);
		let text=JSON.parse(JSON.stringify(error)).response.status===404?'404':'网络异常';
		message.error(text);
		return Promise.reject(error);
	}
);
export default service;
