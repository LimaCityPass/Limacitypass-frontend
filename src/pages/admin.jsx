import React, {Component} from 'react';

import {Link, Route, Switch} from 'react-router-dom'

import {Icon, Layout, Menu} from 'antd';

import AdminUsersPage from './admin_users'
import AdminAttractionsPage from './admin_attractions'
import AdminTicketsPage from './admin_tickets'

import './styles/admin.css'

import LcpLogo from '../assets/logowhite.png'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class LcpAdminPage extends Component {

    state = {
        collapsed: false,
    };

    constructor(props) {
        super(props);

    }


    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    render() {

        return (

            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        breakpoint="lg"
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        fixed
                    >
                        <div className="lcp-logo-container">
                            <img src={LcpLogo} style={{width: 'auto',
                                height: this.state.collapsed? '40px': '120px'}}/>
                        </div>

                        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                            <Menu.Item key="1">
                                <Link to={'/admin/users'}/>
                                <Icon type="user"/>
                                <span>Users</span>
                            </Menu.Item>

                            <Menu.Item key="2">
                                <Link to={'/admin/attractions'}/>
                                <Icon type="environment"/>
                                <span>Attractions</span>
                            </Menu.Item>

                            <Menu.Item key="3">
                                <Link to={'/admin/routes'}/>
                                <Icon type="share-alt"/>
                                <span>Routes</span>
                            </Menu.Item>

                            <Menu.Item key="4">
                                <Link to={'/admin/tickets'}/>
                                <Icon type="qrcode"/>
                                <span>Tickets</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>

                        <Header style={{ background: '#fff', padding: 0 }} >
                        </Header>

                        <Content style={{ margin: '0 16px' }}>
                            <div style={{ padding: 24, minHeight: 360 }}>
                                <Switch>
                                    {console.log(this.props.match)}
                                    <Route exact path="/admin/users" component={AdminUsersPage}/>
                                    <Route exact path="/admin/attractions" component={AdminAttractionsPage}/>
                                    <Route exact path="/admin/tickets" component={AdminTicketsPage}/>
                                </Switch>

                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Lima City Pass ©2017 Created with <Icon type="heart" /> by BMR
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}


export default LcpAdminPage;
