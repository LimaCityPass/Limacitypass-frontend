import React, { Component}  from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Table, Icon, Divider, Button } from 'antd';

const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: text => <a href="#">{text}</a>,
}, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <div>
            <Button shape="circle" icon="edit" />
            <Divider type={'vertical'}/>
            <Button type="danger" shape="circle" icon="delete" />
        </div>
    ),
}];


function TodoApp({ data: { users, refetch } }) {
    return (
        <div>
            <Table columns={columns} dataSource={users}/>
            <Button onClick={() => refetch()} type="dashed"> Refresh </Button>
        </div>
    );
}

export default graphql(gql`
  query TodoAppQuery {
    users {
      id
      name
      email
    }
  }
`)(TodoApp);