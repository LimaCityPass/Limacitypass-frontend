import React, {Component} from 'react';
import glamorous from 'glamorous';

import {Button, Col, Divider, Form, Input, Modal, Radio, Row, Table, Tag} from 'antd';
import {setHost, signup, session} from 'keratin-authn';

import LcpBackground from '../components/atoms/lcp_background';
import LcpLoginForm from '../components/molecules/lcp_login_module'

import lPlaza from '../assets/background_login.png';
import limaLogo from '../assets/limalogo_login.png';
import bkgLogo from '../assets/bkg_login.png';

const Background = LcpBackground(lPlaza);
const BackgroundCard = LcpBackground(bkgLogo);

const LoginCard = glamorous.div({
    backgroundColor: 'white',
    height: '-webkit-fill-available',
    WebkitBoxShadow: '-16px 0px 104px -33px rgba(0,0,0,1)',
    MozBoxShadow: '-16px 0px 104px -33px rgba(0,0,0,1)',
    boxShadow: '-16px 0px 104px -33px rgba(0,0,0,1)',
});

const VerticalWrap = glamorous.div({
    paddingLeft: '12.5em',
    paddingRight: '12.5em',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
});

const VerticalElement = glamorous.div({
    position: 'relative',
    transform: 'translateX(27%)',
});

const LoginText = glamorous.div({
    fontSize: '28px',
    color: '#0992F8',
    paddingTop: '20px',
    paddingBottom: '10px',
});

const Subtitle = glamorous.div({
    paddingBottom: '10px',
});

class LcpLoginPage extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        setHost("http://52.67.227.244:8080");
    }

    onSubmit(err, values) {
        console.log(err, values);
    }


    render() {
        return (
            <Background>
                <Row align={'center'}>
                    <Col span={12}>
                    </Col>

                    <Col span={12}>
                        <LoginCard>
                            <BackgroundCard>
                                <VerticalWrap>
                                    <VerticalElement>
                                        <img src={limaLogo}/>
                                    </VerticalElement>

                                    <LoginText>
                                        Login
                                    </LoginText>
                                    <Subtitle>
                                        Addiction When Gambling Becomes A Problem.
                                    </Subtitle>
                                    <LcpLoginForm onSubmit={this.onSubmit}/>
                                </VerticalWrap>
                            </BackgroundCard>
                        </LoginCard>

                    </Col>


                </Row>
            </Background>
        );
    }
}


export default LcpLoginPage;
