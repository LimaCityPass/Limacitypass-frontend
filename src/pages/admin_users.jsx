import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import glamorous from 'glamorous'

import {Button, Col, Divider, Form, Input, Modal, Radio, Row, Table, Tag} from 'antd';

import LcpCreatorMutation from '../components/admin/lcp_create_any'
import LcpDeleterMutation from '../components/admin/lcp_delete_any'

import './styles/users.css'

const usersListQuery = gql`
  query {
    allUsers {
      id
      name
      email
      group
    }
  }`;

const createUserMutation = gql`
 mutation createUser (
  $email: String!
  $group: String!
  $name: String!
  $password: String!
  $username: String!) {
  createUser(email: $email, name: $name, group: $group, password: $password, username: $username ) {
    id
    email
    name
    group
  }
}`;

const deleteUserMutation = gql`
mutation deleteUser ($id: ID!) {
    deleteUser(id: $id) {
        id
        name
        email
        group
    }
}`;

const FormItem = Form.Item;

const TitleText = glamorous.div({
    fontFamily: 'Quicksand',
    fontSize: '1.5em',
    paddingBottom: '1.3em',
});

const NewUserForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="Create a new User"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="Email">
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input a valid email' }],
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem label="Name">
                        {getFieldDecorator('name', {rules: [{required: true,
                            message: 'Please enter a valid name'}]})(<Input/>)}
                    </FormItem>

                    <FormItem label="Username">
                        {getFieldDecorator('username', {rules: [{required: true,
                            message: 'Please enter a valid username'}]})(<Input/>)}
                    </FormItem>

                    <FormItem label="Password">
                        {getFieldDecorator('password', {rules: [{required: true,
                            message: 'Please enter a valid password'}]})(<Input/>)}
                    </FormItem>

                    <FormItem className="collection-create-form_last-form-item">
                        {getFieldDecorator('group', {
                            initialValue: 'tourist',
                        })(
                            <Radio.Group>
                                <Radio value="admin">Admin</Radio>
                                <Radio value="tourist">Tourist</Radio>
                            </Radio.Group>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);


const CreateNewUserWithData = LcpCreatorMutation('user', createUserMutation, ['name', 'email', 'password', 'group', 'username'], NewUserForm, usersListQuery, null);

const DeleteUserWithData = LcpDeleterMutation('user', deleteUserMutation, <Button shape="circle" type="danger" icon="delete"/>, usersListQuery, null);


class AdminUsersPage extends Component {

    constructor(props) {
        super(props);

    }

    columns = [{
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
        title: 'Group',
        dataIndex: 'group',
        key: 'group',
        render: (text, record) => {
            if (text==='admin') {
                return <Tag color="geekblue">Admin</Tag>
            }else{
                return <Tag color="gold">Tourist</Tag>
            }
        },
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <div>
                {console.log(record)}
                <Button shape="circle" icon="edit" />
                <Divider type={'vertical'}/>
                <DeleteUserWithData id={record.id}/>
            </div>
        ),
    }];



    render() {
        const users = this.props.data.allUsers;
        return (
            <div>
                <Row type="flex" justify="space-between" align="top" style={{padding: '10px'}}>
                    <Col span={6}>
                        <TitleText> Users information:</TitleText>
                    </Col>
                    <Col span={4}>
                        <CreateNewUserWithData/>
                    </Col>
                </Row>

                <Table columns={this.columns} dataSource={users}/>
                <Button onClick={() => this.props.data.refetch()} type="dashed"> Refresh </Button>
            </div>
        );
    }


}

export default graphql(usersListQuery)(AdminUsersPage);