import React, {Component} from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import glamorous from 'glamorous'
import {Icon, Button, Row, Col} from 'antd';

const ItemContainer = glamorous.div({
    paddingBottom: '0.6em',
    fontFamily: 'QuickSand',
});

const OnTopItem = glamorous.div({
    position: 'relative',
    zIndex: 10,
});

const antdStyle = {
    input: {
        width: '100%',
        border: '1px solid #D9D9D9',
        height: '30px',
        borderRadius: '4px',
        ':hover': {
            border: '1px solid #38AAF9',
        }
    },
    autocompleteContainer: {border: '0px'},
    autocompleteItem: { color: '#243237' },
    autocompleteItemActive: { color: '#0992F8' }
};

const AutocompleteItem = ({ formattedSuggestion }) => (
    <ItemContainer>
        <Icon type="environment" style={{marginRight: '0.6em'}}/>

        <strong>{ formattedSuggestion.mainText }</strong>{' '}
        <small>{ formattedSuggestion.secondaryText }</small>
    </ItemContainer>
);

class LcpAttractionSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
        this.onFill = this.props.onFill;
        this.onChange = (address) => this.setState({ address });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        let data = {};
        geocodeByAddress(this.state.address)
            .then(results => {
                data.address = results[0].formatted_address;
                getLatLng(results[0])
                .then(latLng => {
                    data.lat = latLng.lat;
                    data.lng = latLng.lng;
                    data.name = this.state.address;
                    this.onFill?this.onFill(data):null;

                });
            })
            .catch(error => console.error('Error', error))
    };

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        };

        return (
            <OnTopItem>
                <form>
                    <Row>
                        <Col span={19}>
                            <PlacesAutocomplete
                                inputProps={inputProps}
                                autocompleteItem={AutocompleteItem}
                                styles={antdStyle}
                            />
                        </Col>
                        <Col span={4} offset={1}>
                            <Button type="primary" onClick={this.handleFormSubmit}>Autofill</Button>
                        </Col>
                    </Row>


                </form>
            </OnTopItem>

        )
    }
}

LcpAttractionSearch.propTypes = {};

export default LcpAttractionSearch;
