import React from 'react';
import {getData} from './../utils/api';
export default class Home extends React.Component{
	super(props){
		this.updateData=this.updateData.bind(this);
	}
	updateData(){
		
	}
	async componentDidMount(){
		const data={
			limit: 15,
			page: 2,
			table: "news"
		}
		let res=await getData('/news',data);
		console.log(res)
	}
	render(){
		return(
			<div>
				Home
			</div>
		)		
	}
}
