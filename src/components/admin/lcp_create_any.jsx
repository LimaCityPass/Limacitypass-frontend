import React, {Component} from 'react';

import {message, Button} from 'antd';
import createReactClass  from 'create-react-class';
import {graphql} from 'react-apollo';


function LcpCreatorMutation(name, mutation, valuesArr, FormView, refetch, callback) {
    const Creator = createReactClass({
        getInitialState() {
            return {visible: false};
        },

        showModal() {
            this.setState({ visible: true });
        },

        handleCancel() {
            this.setState({ visible: false });
        },

        handleCreate() {
            const form = this.form;
            form.validateFields((err, values) => {
                if (err) {
                    return;
                }
                console.log('Received values of form: ', values);
                let vars = {};

                for (let i=0;i<valuesArr.length;i++) {
                    vars[valuesArr[i]] = values[valuesArr[i]];
                }

                this.props.mutate({
                    variables: vars,
                    refetchQueries: [ { query: refetch }]
                })
                    .then(({ data }) => {
                        message.success(`Created new ${name.charAt(0).toUpperCase() + name.slice(1)}`);
                        console.log('got data', data);
                        if (callback) {
                            callback(data);
                        }

                    }).catch((error) => {
                        message.error('Error:' + error.toString());
                        console.log('there was an error sending the query', error);
                        if (callback) {
                            callback(error);
                        }

                });

                form.resetFields();
                this.setState({ visible: false });
            });
        },
        saveFormRef(form) {
            this.form = form;
        },

        render() {
            return (
                <div>
                    <Button type="primary" icon="plus" onClick={this.showModal}>Create new user</Button>
                    <FormView
                        ref={this.saveFormRef}
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        onCreate={this.handleCreate}
                    />
                </div>
            );
        }
    });

    return graphql(mutation)(Creator)
}

export default LcpCreatorMutation;