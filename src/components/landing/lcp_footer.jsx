import React, {Component} from 'react';
import "./styles/Footer.css";
import {Col, Grid, Row} from 'react-material-responsive-grid';
import {DirectLink, Events, Link, scrollSpy} from 'react-scroll';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.logo = props.logo;
        this.content = props.content;
        this.titles = props.titles;
        this.creditcard = props.creditcard;
        this.legal = props.legal;
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    };

    updateDimensions(e) {
        this.setState({
            windowHeight: (window.innerHeight),
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
            <Grid className='footerfont' style={{'margin':0}} data-anijs="if: scroll, on:window, do: flipInY animated, before: scrollReveal, after: removeAnim">
                    <Col hiddenDown="sm" md={12} lg={12} xl={12} className='' style={{'padding':0}}>
                        <Row className='withoutmarpadd textcolor' >
                            <Col hiddenDown="sm" md={4} lg={4} xl={4} className='inline' style={{'background':'#32434A'}}>
                                <div className='column1'>
                                    <img src={this.logo} className='logofooter'></img>
                                <p>{this.content}</p>
                                </div>
                            </Col>
                            <Col hiddenDown="sm" md={4} lg={4} xl={4} className='inline' style={{'background':'#2B3A40'}}>
                                <Row className='withoutmarpadd column2'>
                                    {this.titles.map((title) =>
                                        <Col hiddenDown="sm" md={12} lg={12} xl={12} className='titlesspace uppertext'>
                                            <Link to={title.to} spy={true} smooth={true} delay={0} duration={800} offset={-15}>{title.text}</Link>
                                        </Col>
                                    )}
                                    {this.creditcard.map((card) =>
                                        <Col hiddenDown="sm" md={3} lg={3} xl={3} className='creditcardpadding'>
                                            <img src={card.image} className='creditcard'></img>
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                            <Col hiddenDown="sm" md={4} lg={4} xl={4} className='inline' style={{'background':'#253237'}}>
                                <Row className='withoutmarpadd column3'>
                                    {this.legal.map((legal) =>
                                        <Col hiddenDown="sm" md={12} lg={12} xl={12} className='legalspace uppertext'>
                                            <a href={legal.href}>{legal.text}</a>
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col hiddenUp="md" sm={12} className=' col-xs-12'  style={{'padding':0}}>
                        <Row hiddenUp="md" className='withoutmarpadd textcolor'>
                            <Col hiddenUp="md" sm={12} className='inline col-xs-12' style={{'background':'#32434A'}}>
                                <Row className='withoutmarpadd column1'>
                                <Col hiddenUp="md" sm={6} className='col-xs-6 verticalaligndiv'>
                                    <div><img src={this.logo} className='logofooter'></img></div>
                                </Col>
                                <Col hiddenUp="md" sm={6} className='col-xs-6'>
                                    <p>{this.content}</p>
                                </Col>
                                </Row>
                            </Col>
                            <Col hiddenUp="md" sm={12} className='inline col-xs-12' style={{'background':'#2B3A40'}}>
                                <Row className='withoutmarpadd column2'>
                                    {this.titles.map((title) =>
                                        <Col hiddenUp="md" sm={12} className='col-xs-12 titlesspace uppertext'>
                                            <a href={title.href}>{title.text}</a>
                                        </Col>
                                    )}
                                    {this.creditcard.map((card) =>
                                        <Col hiddenUp="md" sm={3} className='col-xs-3 creditcardpadding'>
                                            <img src={card.image} className='creditcard'></img>
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                            <Col hiddenUp="md" sm={12} className='inline col-xs-12' style={{'background':'#253237'}}>
                                <Row className='withoutmarpadd column3'>
                                    {this.legal.map((legal) =>
                                        <Col hiddenUp="md" sm={6} className='col-xs-6 legalspace uppertext'>
                                            <a href={legal.href}>{legal.text}</a>
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
            </Grid>

        )
    }
}

export default Footer