import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import glamorous from 'glamorous'

import {Button, Col, Divider, Input, message, Row, Table, Tag, Tooltip, Modal} from 'antd';

import LcpAttractionSearch from '../components/lcp_attraction_search';

import DeleterMutation from '../components/admin/lcp_delete_any'

const TitleText = glamorous.div({
    fontFamily: 'Quicksand',
    fontSize: '1.5em',
    paddingBottom: '1.3em',
});

const InputWrapper = glamorous.div({
    margin: '2.1em',
});

const SubtitleText = glamorous.div({
    fontFamily: 'Quicksand',
    fontSize: '1.2em',
});


class NewAttraction extends Component {

    constructor(props) {
        super(props);
        this.clickOnFill = this.clickOnFill.bind(this);

        this.state = {newAttractionData: {name: '', address: '', lng: null, lat: null}};
        this.state.visible = false;
        this.createNewAttraction = this.createNewAttraction.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    clickOnFill(data) {
        const forFill = data;
        this.setState((() => {
            return {newAttractionData: forFill}
        }));

    }

    showModal() {
        this.setState({ visible: true });
    }

    handleCancel() {
        this.setState({ visible: false });
    }


    createNewAttraction() {

        try {
            const newAttraction = this.state.newAttractionData;
            if (newAttraction.address && newAttraction.name && newAttraction.lat && newAttraction.lng) {
                console.log(newAttraction);

                console.log(this.props.mutate);
                this.props.mutate({
                    variables: {
                        name: newAttraction.name,
                        address: newAttraction.address,
                        latitude: newAttraction.lat,
                        longitude: newAttraction.lng,
                    },
                    refetchQueries: [ { query: allAttractionsQuery }]
                }).then(({ data }) => {
                    console.log('got data', data);
                }).catch((error) => {
                    console.log('there was an error sending the query', error);
                });
            } else {
                throw "Error with fields"
            }




        } catch (e) {
            message.error('Error at fields values, please fixed that');
            console.log(e);
        }
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
                <Modal
                    visible={this.state.visible}
                    title="Create new attraction"
                    onCancel={this.handleCancel}
                    onOk={this.createNewAttraction}
                >
                    <div style={{marginLeft: '2.1em'}}>
                        <SubtitleText> Create new Attraction </SubtitleText>
                    </div>
                    <InputWrapper>
                        Search Attraction using Google:
                        <LcpAttractionSearch onFill={this.clickOnFill}/>
                        <Divider />
                    </InputWrapper>
                    <InputWrapper>
                        <Row>
                            <Col span={24}>
                                <Input placeholder="Name" value={this.state.newAttractionData.name}/>
                            </Col>
                        </Row>
                    </InputWrapper>
                    <InputWrapper>
                        <Row>
                            <Col span={24}>
                                <Input placeholder="Address" value={this.state.newAttractionData.address}/>
                            </Col>
                        </Row>
                    </InputWrapper>
                    <InputWrapper>
                        <Row>
                            <Col span={12}>
                                <Input placeholder="Latitude" value={this.state.newAttractionData.lat}/>
                            </Col>
                            <Col span={12}>
                                <Input placeholder="Longitude" value={this.state.newAttractionData.lng}/>
                            </Col>
                        </Row>
                    </InputWrapper>
                    <div style={{marginTop: '2.1em', marginBottom: '2.1em'}}>
                        <Row align="center" type="flex" justify="end">
                            <Col span={6}>
                                <Button type="danger" onClick={() => {this.setState(
                                    () => {
                                        return {newAttractionData: {name: '', address: '', lng: null, lat: null}}
                                    }
                                )}}>Clear fields</Button>
                            </Col>
                            <Col span={10} >
                                {/*<Button type="primary" onClick={this.createNewAttraction}>Create new attraction</Button>*/}
                            </Col>
                        </Row>
                    </div>
                </Modal>
                <Button type="primary" icon="plus" onClick={this.showModal}>Create new attraction</Button>
            </div>

        );
    }

}

const newAttractionMutation = gql`
    mutation createAttraction (
            $name: String!
            $address: String!
            $longitude: Float!
            $latitude: Float!
        ){
        createAttraction (
                name: $name
                address: $address
                longitude: $longitude
                latitude: $latitude
            ){
                id
                name
                active
                address
                latitude
                longitude
        }
    }`;

const NewAttractionWithData = graphql(newAttractionMutation)(NewAttraction);



const deleteAttractionQuery = gql`
    mutation ($id: ID!) {
        deleteAttraction(id: $id) {
            id
            name
            active
            address
            latitude
            longitude
        }
    }
`;

const allAttractionsQuery = gql`{
  allAttractions {
    id
    name
    active
    address
    latitude
    longitude
  }
}`;

const DeleteAttractionWithData = DeleterMutation('attraction', deleteAttractionQuery, <Button shape="circle" type="danger" icon="delete"/>, allAttractionsQuery);

// const DeleteAttractionWithData = graphql(deleteAttractionQuery)(DeleteAttraction);


class AdminAttractionsPage extends Component {

    constructor(props) {
        super(props);

    }

    columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 250,
    }, {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
        render: (text, record) => {
            if (record.active) {
                return <Tag color="green">Active</Tag>
            }else{
                return <Tag color="red">Closed</Tag>
            }
        }
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',

    }, {
        title: 'Actions',
        key: 'action',
        render: (text, record) => (
            <div>
                <Tooltip title="Open in google maps">
                    <Button shape="circle" icon="environment" href={`http://maps.google.com/?q=${record.latitude},${record.longitude}`} target="_blank"/>
                </Tooltip>

                <Divider type="vertical"/>

                <Tooltip title="Edit Attraction">
                    <Button shape="circle" icon="edit" />
                </Tooltip>

                <Divider type="vertical"/>

                <DeleteAttractionWithData id={record.id} />
            </div>
        ),
    }];



    render() {
        const attractions = this.props.data.allAttractions;

        return (
            <div>

                <Row type="flex" justify="space-between" align="top" style={{padding: '10px'}}>
                    <Col span={6}>
                        <TitleText> Attractions:</TitleText>
                    </Col>
                    <Col span={5}>
                        <NewAttractionWithData/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Table dataSource={attractions} columns={this.columns}/>
                    </Col>
                </Row>
            </div>
        );
    }
}



export default graphql(allAttractionsQuery)(AdminAttractionsPage);
