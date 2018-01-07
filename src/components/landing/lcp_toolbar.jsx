import {Col, Row} from 'react-flexbox-grid';
import React, {Component} from 'react';
import Signin from '../../assets/signin.svg'
import BuyNowButton from './lcp_buy_now_button'

import MenuToolbar from './lcp_menu_toolbar'
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

import "./styles/Toolbar.css"
import {animateScroll as scroll, DirectLink, Events, Link, scrollSpy} from 'react-scroll';

const styles = {
    smallIcon: {
        width: 36,
        height: 36,
    },
    mediumIcon: {
        width: 48,
        height: 48,
    },
    largeIcon: {
        width: 60,
        height: 60,
    },
    small: {
        width: 36,
        height: 36,
    },
    medium: {
        width: 96,
        height: 96,
        padding: 24,
    },
    large: {
        width: 120,
        height: 120,
        padding: 30,
    },
};

class LcpToolbar extends Component {
    constructor(props) {
        super(props);
        this.elements = props.elements;
        this.state = {
            scrollPosition: window.scrollY
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });
        scrollSpy.update();
    };
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    };
    handleScroll () {
        this.setState({
            scrollPosition: window.scrollY,
        });
    };

    handleChange = (event, index, value) => this.setState({value});

    render(){
        let colorToolbarClass = ['shortcut-toolbar'];
        let backgroundToolbar = ['lcp-toolbar'];
        if(this.state.scrollPosition > (window.innerHeight-100)) {
            colorToolbarClass.push('othercolor');
            backgroundToolbar.push('newcolor');
        }
        return (
            <div className='sticky unselectable'>
                <MenuToolbar elements={this.elements}/>
            <Row className={backgroundToolbar.join(' ')} >
                <Col xs={12} sm={12} md={12} lg={12} className='hidden-sm-down'>
                    <Row className='text_align'>
                        <Col xs={6} sm={6} md={6} lg={6} style={{'margin':'0 0 0 0', 'padding':'0 80px 0 30px'}}>
                            <Row >
                                {this.elements.map( elem => (
                                        <Col lg={12/elem.length}
                                             md={12/elem.length}
                                             sm={12/elem.length}
                                             xs={12/elem.length}
                                             style={{'margin':'0 0 0 0', 'padding':'0 0 0 0'}}>
                                            <Link className={colorToolbarClass.join(' ')} to={elem.to} spy={true} smooth={true} delay={0} duration={800} offset={-25}>{elem.title}</Link>
                                        </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xsOffset={1} smOffset={3} mdOffset={3} lgOffset={3} lg={2} md={2}>
                                <div style={{'margin':'-6.5%'}} className=''>
                                    <BuyNowButton name={'BUY NOW'}/>
                                </div>
                        </Col>
                        <Col lg={1} md={1} xs={1} sm={1} >
                            <div style={{'right':'0', 'margin': '-12px 0 0 0'}}>
                                <div className='signin' style={{'backgroundImage': `url(${Signin}`}}>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} className='hidden-md-up'>
                    <Row className='text_align'>
                        <Col xs={6} sm={6} md={6} lg={6} style={{'margin':'0 0 0 0', 'padding':'0 80px 0 30px'}}>
                            <Row >
                                <IconMenu
                                    iconButtonElement={
                                        <IconButton
                                            iconStyle={styles.smallIcon}
                                            style={styles.small}>
                                            <ContentFilter color={'#ffffff'}/>
                                        </IconButton>}
                                    onChange={this.handleChange}
                                    value={this.state.value}
                                    autoWidth={false}
                                    style={{
                                        margin: '-16px 0 0 0',
                                        color: '#ffffff',
                                    }}
                                >
                                    {this.elements.map( elem => (
                                        <Link
                                            to={elem.to}
                                            spy={true}
                                            smooth={true}
                                            delay={0}
                                            duration={800}
                                            offset={-30}
                                        >
                                            <MenuItem primaryText={elem.title} />
                                        </Link>
                                    ))}
                                </IconMenu>
                            </Row>
                        </Col>
                        <Col xsOffset={3} smOffset={3} xs={3} sm={3}>
                            <div style={{'right':'0', 'margin': '-9px 0 0 0'}}>
                                <div className='signin' style={{'backgroundImage': `url(${Signin}`}}>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>
        )
    }
}

export default LcpToolbar