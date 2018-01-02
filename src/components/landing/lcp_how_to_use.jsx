import React, { Component } from 'react';
import "./styles/HowToUse.css";
import "./styles/flowtextHowToUse.css";
import { Grid, Row, Col } from 'react-material-responsive-grid';
import ButtonHowToUse from './lcp_button_how_to_use'

class HowToUse extends Component {

    constructor(props) {
        super(props);
        this.backgroundDesktop = props.backgroundDesktop;
        this.backgroundMovil = props.backgroundMovil;
        this.title = props.title;
        this.items = props.items;
        this.ilovelimaimage = props.ilovelimaimage;
        this.hashtag = props.hashtag;
        this.hashtagcontent = props.hashtagcontent;
        this.contentwidth = window.innerWidth * 0.1219;
        this.otherheight = window.screen.availHeight - 70;
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);

        console.log(this.items);
    };

    updateDimensions(e) {
        this.setState({
            windowHeight: (window.innerWidth),
            windowWidth: (window.innerWidth)
        });
    }
    componentWillMount () {
        this.updateDimensions();
    }
    componentDidMount () {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount () {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render () {
        return (
            <div >
                <Grid  style={{'margin':0}}>
                    <Col hiddenDown="sm" xs={12} sm={12} md={12} lg={12} xl={12} className='containercontenthowtouse' style={{'padding':0, 'backgroundImage': `url(${this.backgroundDesktop}`}}>
                        <Row top={['md','lg','xl']} className='withoutmarpadd' style={{'height':'-webkit-fill-available', 'margin':0, 'padding':0}}>
                            <Col hiddenDown="sm" xs={12} sm={12} md={12} lg={12} className=''>
                                <div className='title' >{this.title}</div>
                            </Col>
                            <Row style={{'width': '100%', 'margin-top':'60px', 'margin-left':0, 'margin-right':0, 'padding':'0 10% 30px 10%'}}>
                                {this.items.map((item) =>
                                    <Col hiddenDown="sm" xs={3} md={3} lg={3} xl={3} className=''>
                                        <div className='divimagesHowtouse' style={{'height': (this.state.windowWidth * 0.1), 'width':(this.state.windowWidth * 0.1)}}>
                                            <img className='imagesHowtouse' src={item.image} style={{'height':(this.state.windowWidth * 0.1), 'width':(this.state.windowWidth * 0.1)}}/>
                                        </div>
                                        <div className='titlehowtouse'>{item.title}</div>
                                        <div className='content flow-text-howtouse'>{item.content}</div>
                                        <ButtonHowToUse name={'Learn more'}/>
                                    </Col>
                                )}
                            </Row>
                            <Row className='divline' style={{'width': '100%', 'margin-top':'100px', 'margin-left':0, 'margin-right':0}}>
                                <Col hiddenDown="sm" md={2} lg={2} className=''>
                                    <img className='iloveimage verticalalign' src={this.ilovelimaimage} style={{'padding-top':'3px'}}></img>
                                </Col>
                                <Col hiddenDown="sm" md={3} lg={3} className='hashtag verticalalign' style={{'text-align': 'left'}}>
                                    {this.hashtag}
                                </Col>
                                <Col hiddenDown="sm" md={7} lg={7} className='hashtagcontent verticalalign' style={{'text-align': 'right'}}>
                                    {this.hashtagcontent}
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Grid>
                <Grid style={{'margin':0}}>
                    <Col hiddenUp="md" xs={12} sm={12} className='containercontenthowtouse' style={{'padding':0, 'backgroundImage': `url(${this.backgroundMovil}`}}>
                        <Row className='withoutmarpadd' style={{'margin':0, 'padding':0}}>
                            <Col hiddenUp="md" xs={12} sm={12} md={12} lg={12} className='inline' style={{'padding-bottom':20, 'padding-top':20}}>
                                <div className='title' style={{'width': this.state.windowWidth}}>{this.title}</div>
                            </Col>
                            {this.items.map((item) =>
                                <Col hiddenUp="md" xs={12} sm={12} className='inline'>
                                    <Row style={{'margin':0, 'padding-bottom':50}}>
                                        <Col className='col-xs-6' sm={6}>
                                            <div className='divimagesHowtouse' style={{'height':(this.state.windowWidth * 0.35), 'width':(this.state.windowWidth * 0.35)}}>
                                                <img className='imagesHowtouse' src={item.image} style={{'height':(this.state.windowWidth * 0.35), 'width':(this.state.windowWidth * 0.35)}}></img>
                                            </div>
                                        </Col>
                                        <Col className='col-xs-6' sm={6} style={{'display': 'grid'}}>
                                            <div className='center-elements'>
                                                <div className='titlehowtouse'>{item.title}</div>
                                                <div className='center-elements content flow-text-howtouse'>{item.content}</div>
                                                <ButtonHowToUse name={'Learn more'}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            )}
                        </Row>
                        <Row className='divline' style={{'width': '100%', 'margin-left':0, 'margin-right':0}}>
                            <Col hiddenUp="md" sm={6} className='col-xs-6'>
                                <img className='iloveimage verticalalign' src={this.ilovelimaimage}></img>
                            </Col>
                            <Col hiddenUp="md" sm={6} className='hashtag col-xs-6 verticalalign' style={{'text-align': 'center'}}>
                                {this.hashtag}
                            </Col>
                            <Col hiddenUp="md" sm={12} className='col-xs-12 hashtagcontent verticalalign' style={{'text-align': 'center'}}>
                                {this.hashtagcontent}
                            </Col>
                        </Row>
                    </Col>
                </Grid>
            </div>
        );
    }

}

export default HowToUse