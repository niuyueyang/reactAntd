import React from 'react'
import Left from './components/left';
import Contents from './components/content'
import './App.css'
export default class App extends React.Component {
  render(){
  	return(
  		<div className="wrap">
  			<Left></Left>  			
  			<Contents child={this.props.children}></Contents>
  		</div>
  	)
  }
}
