import service from './request';
export const getData=(url,data)=>{
	return service({
		url:url,
		method:'post',
		data
	})
}
