import React, {Component} from 'react';
import "./styles/WhatsIncluded.css";
import "./styles/flowtextWhatsIncluded.css";
import {Col, Grid, Row} from 'react-material-responsive-grid';
import LcpCarousel from './lcp_carousel';
import {DirectLink, Events, scrollSpy} from 'react-scroll';


class WhatsIncluded extends Component {

    constructor(props) {
        super(props);
        this.items = props.items;
        this.background = props.background;
        this.imagetickets = props.imagetickets;
        this.title = props.title;
        this.contentcenter = props.contentcenter;
        this.contentleft = props.contentleft;
        this.contentheight = window.innerHeight * 0.55;
        this.otherheight = (window.screen.availHeight - 70) * 0.57;
        this.complementheight = (window.screen.availHeight - 70) * 0.02;
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
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
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }
    componentWillUnmount () {
        window.removeEventListener("resize", this.updateDimensions);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render () {
        return (
            <div >
                <Grid style={{'margin': 0, 'padding': 0, 'width':'100%'}}>
                    <Col hiddenDown="sm" md={12} lg={12} xl={12} className='' style={{'padding':'0 0 0 0'}}>
                        <Row className='withoutmarpadd' style={{'height':'-webkit-fill-available', 'margin':0, 'padding':0}}>
                            <Row className='containercontentwhatisincluded' style={{'padding':'0 10% 3% 10%', 'margin':'0', 'backgroundImage': `url(${this.background}`}}>
                                <Col hiddenDown="sm"  md={12} lg={12} style={{'padding':'0 0 20px 0'}}>
                                    <div className='titlewhatis' >{this.title}</div>
                                </Col>
                                <Col hiddenDown="sm" md={4} lg={4} className='center-elements inline' style={{'padding-left':0, 'padding-right':0}}>
                                    <div className='divimagesWhatis'>
                                        <img className='imagetickets' src={this.imagetickets}></img>
                                    </div>
                                </Col>
                                <Col hiddenDown="sm" md={4} lg={4} className='' style={{'padding-left':0, 'padding-right':0}}>
                                    <div className='textcontent flow-text-howtouse' style={{'padding-top': 30}}>{this.contentcenter}</div>
                                </Col>
                                <Col hiddenDown="sm" md={4} lg={4} className='' style={{'padding-left':0, 'padding-right':0}}>
                                    <div className='textcontent flow-text-howtouse' style={{'padding-top': 30}}>{this.contentleft}</div>
                                </Col>
                            </Row>
                            <Col hiddenDown="sm" md={12} lg={12} style={{'padding-left':0, 'padding-right':0}}>
                                <LcpCarousel items={this.items}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col hiddenUp="md" sm={12} className='col-xs-12 ' style={{'padding':'60px 0 0 0'}}>
                        <Row  className='withoutmarpadd' style={{'margin':0, 'padding':0}}>
                            <Row className='containercontentwhatisincluded' style={{'padding':0, 'backgroundImage': `url(${this.background}`}}>
                                <Col hiddenUp="md" sm={12} className='col-xs-12' style={{'padding-left':0, 'padding-right':0}}>
                                    <div className='titlewhatis' >{this.title}</div>
                                </Col>
                                <Col hiddenUp="md" sm={12} className='col-xs-12 center-elements inline' style={{'padding-left':0, 'padding-right':0}}>
                                    <div className='divimagesWhatis'>
                                        <img className='imagetickets' src={this.imagetickets}></img>
                                    </div>
                                </Col>
                                <Col hiddenUp="md" sm={12} className='col-xs-12'>
                                    <div className='textcontent flow-text-howtouse'>{this.contentcenter}</div>
                                    <div className='textcontent flow-text-howtouse' style={{'padding-bottom':'10%'}}>{this.contentleft}</div>
                                </Col>
                            </Row>
                            <Col hiddenUp="md" sm={12} className='col-xs-12' style={{'padding-left':0, 'padding-right':0}}>
                                <LcpCarousel items={this.items}/>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
            </div>
        );
    }

}

export default WhatsIncluded