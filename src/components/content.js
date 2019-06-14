import React from 'react'
import {Layout, Breadcrumb, Icon} from 'antd';
import './../less/content.less'

const { Header, Content, Footer, Sider } = Layout;

export default class Contents extends React.Component {
  render(){
  	return(
  		<div className="wrapContent"> 			
  		<Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
            </Breadcrumb>
            <div>{this.props.child}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>优易数据@2019/06/14</Footer>
        </Layout>
  		</div>
  	)
  }
}
