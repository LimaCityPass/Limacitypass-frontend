import React, {Component} from 'react';
import './styles/ButtonDiscounts.css';
import SkyLight from 'react-skylight';
import {Col, Row} from 'react-flexbox-grid';

import ButtonHowToUse from './lcp_button_how_to_use'

class ButtonDiscounts extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.image = props.image;
        this.description = props.description;
    };

    render() {

        var ColorDialog = {
            backgroundColor: '#F5F5F5',
            color: '#233236',
            height: 'auto',
            'font-family': 'Quicksand, serif',
        };

        return (
            <div>
                <div onClick={() => this.bebe.show()}>
                    <div className='btndiscounts unselectable'>
                        {this.name}
                        <div className='minusculas'>
                            see more
                        </div>
                    </div>
                </div>
                <SkyLight
                    dialogStyles={ColorDialog}
                    hideOnOverlayClicked
                    ref={ref => this.bebe = ref}
                    title={this.name}
                >
                    <Row>
                        <Col md={12} lg={12} className='hidden-sm-down' >
                            <Row style={{'margin':'0 0 0 0', 'padding':'8px 0 0 0'}}>
                                <Col xs={6} sm={6} md={6} lg={6} style={{'margin':'0 0 0 0', 'padding':'0 20px 0 50px'}}>
                                    <Row>
                                        <img src={this.image} style={{'width':'90%', 'height':'90%'}}/>
                                    </Row>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6} style={{'margin':'0 0 0 0', 'padding':'0 50px 20px 20px'}}>
                                    <Row style={{'text-transform': 'none'}}>
                                        {this.description}
                                        <Col xs={12} sm={12} md={12} lg={12} style={{'margin':'0 0 0 0', 'padding':'15px 0 0 0'}}>
                                            <ButtonHowToUse name={'Look at the gallery'}/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </SkyLight>
            </div>
        );
    }
}

ButtonDiscounts.propTypes = {};

export default ButtonDiscounts;
