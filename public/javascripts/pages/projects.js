import React from 'react';
import { Button, Table, Icon, Popconfirm, Modal } from 'antd';

module.exports = React.createClass({
    getInitialState: function() {
        return {
            visible: false
        };
    },
    removePopConfirmCtrl: function() {
        var me = this;
        return {
            onConfirm: function() {

            },
            onCannel: function() {

            }
        }
    },
    createModalCtrl: function() {
        var me = this;
        return {
            showModal: function() {
                me.setState({
                    visible: true
                });
            },
            handleOk: function() {
                me.setState({
                    confirmLoading: true
                });

                setTimeout(function(){
                    me.setState({
                        confirmLoading: false,
                        visible: false
                    });
                }, 2000)
            },
            handleCancel: function() {
                me.setState({
                    visible: false
                });
            }
        }
    },
    render: function() {
        var me = this;
        const columns = [{
            title: 'Project Name',
            dataIndex: 'name',
            render: function(text) {
                return <a href="#">{text}</a>
            }
        }, {
            title: 'Reports',
            dataIndex: 'reportnumber'
        }, {
            title: 'Owner',
            dataIndex: 'owner',
            render: function(owner) {
                return <span>{owner.name}</span>;
            }
        }, {
            title: 'Operation',
            render: function() {
                return (
                    <span>
                        <a>View</a>
                        <span className="ant-divider"></span>
                        <a>Detail</a>
                        <span className="ant-divider"></span>
                        <Popconfirm
                            title="Confirm remove this record ?"
                            onConfirm={me.removePopConfirmCtrl().onConfirm} 
                            onCannel={me.removePopConfirmCtrl().onCannel}
                            placement="right"
                            okText="ok"
                            cancelText="cancel">
                            <a>Remove</a>
                        </Popconfirm>
                    </span>
                );
            }
        }];
        const data = [{
            id: 1,
            name: 'Image Storage',
            reportnumber: 20,
            owner: {
                name: 'Kenticny'
            }
        }, {
            id: 2,
            name: 'Error Handle',
            reportnumber: 12,
            owner: {
                name: 'Kenticny'
            }
        }];
        const rowKey = function(record) {
            return record.id;
        }
        const pagination = {
            total: data.length,
            pageSize: 10,
            showSizeChanger: true
        };
        return (
            <div id="projects">
                <div className="tools">
                    <div className="r">
                        <Button type="primary" onClick={this.createModalCtrl().showModal}>
                            <Icon type="plus-circle-o" />Create Project
                        </Button>
                        <Modal title="Create Project"
                            visible={this.state.visible}
                            onOk={this.createModalCtrl().handleOk}
                            confirmLoading={this.state.confirmLoading}
                            onCancel={this.createModalCtrl().handleCancel}>
                            <p>{this.state.ModalText}</p>
                        </Modal>
                    </div>
                </div>
                <Table columns={columns} dataSource={data} rowKey={rowKey} />
            </div>
        );
    }
});