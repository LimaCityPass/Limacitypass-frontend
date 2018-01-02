import React, {Component} from 'react';
import createReactClass  from 'create-react-class';
import {graphql} from 'react-apollo';
import {Popconfirm, Tooltip, message} from 'antd'

function LcpDeleterMutation(name, mutationQuery, view, refetchQuery, callback) {

    const Deleter = createReactClass({

        onClick() {
            this.props.mutate({
                variables: {
                    id: this.props.id,
                },
                refetchQueries: [ { query: refetchQuery }]
            })
                .then(({ data }) => {
                    message.success(name.charAt(0).toUpperCase() + name.slice(1) + ' has deleted');
                    console.log('got data', data);
                    if (callback) {
                        callback(data);
                    }
                }).catch((error) => {
                    message.error('Error: '+error.toString());
                    if (callback) {
                        callback(error);
                    }
                    console.log('there was an error sending the query', error);
            });
        },

        render() {
            return (
                <Popconfirm title={`Are you sure delete this ${name.charAt(0).toUpperCase() + name.slice(1)}?`} onConfirm={this.onClick} okText="Yes" cancelText="No">
                    <Tooltip title={`Delete ${name.charAt(0).toUpperCase() + name.slice(1)}`}>
                        {view}
                    </Tooltip>
                </Popconfirm>
            );
        }
    });

    return graphql(mutationQuery)(Deleter);
}

export default LcpDeleterMutation