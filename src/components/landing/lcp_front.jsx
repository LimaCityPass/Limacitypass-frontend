import {Col, Grid, Row} from 'react-flexbox-grid';
import React, {Component} from 'react';
import LcpToolbar from './lcp_toolbar';
import "./styles/Front.css"
import {animateScroll as scroll, DirectLink, Events, Link, scrollSpy} from 'react-scroll';
import LcpButtonSeeMore from '../../components/landing/lcp_button_seemore'

//import { Grid, Row, Col } from 'react-material-responsive-grid';

class LcpFront extends Component {

    constructor(props) {
        super(props);
        this.background = props.background;
        this.logo = props.logo;
        this.toolbarElements = props.toolbarElements;
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            scrollPosition: window.scrollY
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    };

    updateDimensions() {
        this.setState({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        });

    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.updateDimensions);
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });
        scrollSpy.update();
    };

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("resize", this.updateDimensions);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    };

    handleScroll () {
        this.setState({
            scrollPosition: window.scrollY,
        });
    };

    render() {
        let fixedLogoClass = ['logofront'];
        let heightLogo = this.state.windowHeight * 0.5 - this.state.scrollPosition*0.95;
        if(this.state.scrollPosition > 320) {
            fixedLogoClass.push('fix');
            heightLogo = 60.95;
        } else {
            heightLogo = this.state.windowHeight * 0.5 - this.state.scrollPosition*0.95;
        }
        /*if (this.state.scrollPosition > (this.state.windowHeight-30)) {
            fixedLogoClass.push('delete');
        }*/
        return <div>
            <div className="background" style={{'backgroundImage': `url(${this.background}`}}>
                <div style={{'position': 'fixed', 'width': '100%', 'z-index': '2'}}>
                    <LcpToolbar elements={this.toolbarElements}/>
                </div>
                <div className={fixedLogoClass.join(' ')}>
                    <Link to={'lcp'} spy={true} smooth={true} delay={0}
                          duration={800}
                          offset={0}>
                        <img className='logoimg' src={this.logo} style={{'height': heightLogo}}/>
                    </Link>
                </div>
            </div>
            <div style={{'margin':'-75px 0 0 0'}}>
                <Link to={'whatis'} spy={true} smooth={true} delay={0}  duration={800} offset={-25}>
                    <LcpButtonSeeMore/>
                </Link>
            </div>
            <div style={{'margin':'75px 0 0 0'}}>
            </div>
        </div>
    }
 }

 export default LcpFront;