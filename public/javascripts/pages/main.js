import React from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
const ReactRouter = require('react-router');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            current: 'dashboard'
        }
    },
    handleClick: function(e) {
        this.setState({
            current: e.key
        });
    },
    render: function() {
        return (
            <div id="casual-data-app">
                <div id="header">
                    <div className="logo">Casual Data</div>
                    <Menu className="menu-bar" onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal">
                        <Menu.Item className="menu-item" key="properties">
                            <Icon type="setting" />Properties
                        </Menu.Item>
                        <Menu.Item className="menu-item" key="datasources">
                            <Icon type="cloud" />DataSources
                        </Menu.Item>
                        <Menu.Item className="menu-item" key="projects">
                            <a href="/#/projects"><Icon type="folder" />Projects</a>
                        </Menu.Item>
                        <Menu.Item className="menu-item" key="dashboard">
                            <a href="/#/dashboard"><Icon type="appstore" />Dashboard</a>
                        </Menu.Item>
                    </Menu>
                </div>
                <div id="nav">
                    <Breadcrumb {...this.props} router={ReactRouter} />
                </div>
                <div id="content">{this.props.children}</div>
            </div>
        );
    }
});