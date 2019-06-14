import React from 'react';
import { Menu, Icon, Button } from 'antd';
import {Link} from 'react-router-dom'
import '../less/left.less'
const { SubMenu }  = Menu;
export default class Left extends React.Component{
	state = {
    collapsed: false,
  };


  render() {
    return (
      <div className='leftContainer'>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >       
          <Menu.Item key="1">
          <Link to='/'>
            <Icon type="pie-chart" />
            <span>首页</span>
            </Link>
          </Menu.Item>
          
         
          <Menu.Item key="2">
           <Link to='/login'>
            <Icon type="desktop" />
            <span>登录页</span>
            </Link>
          </Menu.Item>
          
          <Menu.Item key="3">
          <Link to='/order'>
            <Icon type="inbox" />
            <span>订单页</span>
            </Link>
          </Menu.Item>
          
        </Menu>
      </div>
    );
  }
}
