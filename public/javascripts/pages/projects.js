import React from 'react';
import { Button, Table, Icon, Popconfirm } from 'antd';

module.exports = React.createClass({
    popConfirmController: function() {
        return {
            onConfirm: function() {

            },
            onCannel: function() {

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
                            onConfirm={me.popConfirmController.onConfirm} 
                            onCannel={me.popConfirmController.onCannel}
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
                        <Button type="primary">
                            <Icon type="plus-circle-o" />Create Project
                        </Button>
                    </div>
                </div>
                <Table columns={columns} dataSource={data} rowKey={rowKey} />
            </div>
        );
    }
});