import React, {Component} from 'react';
import LcpFront from '../components/landing/lcp_front';
import LcpWhatsIncluded from '../components/landing/lcp_whats_included'
import LcpHowToUse from '../components/landing/lcp_how_to_use'
import LcpDiscounts from '../components/landing/lcp_discounts'
import LcpFooter from '../components/landing/lcp_footer'

import BackgroundImage from '../assets/limaplaza.png'
import LcpLogo from '../assets/limalogowhite.svg'
import BackgroundWhatsIncluded from '../assets/whatsincluded.svg'
import TicketsImage from '../assets/cards2.svg'
import BacgroundHowtoUseDesktop from '../assets/background_desktop_howto.svg'
import BackgroundHowToUseMovil from '../assets/background_movil_howto.svg'
import Step1 from '../assets/tablet.png'
import Step2 from '../assets/qr.png';

import Step3 from '../assets/user.png';
import Step4 from '../assets/heart.png';
import IloveLima from '../assets/i_3lima.svg';
import BackgroundDiscountsDesktop from '../assets/background_desktop_discounts.svg'
import BackgroundDiscountsMovil from '../assets/background_movil_discounts.svg'
import Adventure from '../assets/exp4.png'
import Gastronomy from '../assets/exp2.png'
import NightLife from '../assets/exp3.png'
import CreditCard1 from '../assets/visa-pay-logo.svg'
import CreditCard2 from '../assets/mastercard.svg'
import CreditCard3 from '../assets/american-express-logo.svg'
import CreditCard4 from '../assets/paypal.svg'
import '../App.css'

import {DirectLink, Events, scrollSpy} from 'react-scroll';

class LcpLanding extends Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.year = date.getFullYear();
        this.state = {};
        this.lcp_title = 'Lima City Pass';
        this.carouselImages = [
            {
                image: 'http://e.rpp-noticias.io/normal/2017/07/15/4455811jpg.jpg',
                name: 'Huaca Pucllana',
                title: 'A museum',
                description: ''
            },
            {
                image: 'http://www.hotel-r.net/im/hotel/it/museo-70.jpg',
                name: 'Generic Museum',
                title: 'A museum',
                description: ''
            },
            {
                image: 'https://www.interpatagonia.com/paseos/carmen_funes/funes1.jpg',
                name: 'Brontosaurus',
                title: 'A museum',
                description: ''
            }
        ];
        this.whatis_title = "What is included";
        this.whats_contentcenter = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus, sed iaculis odio. Nullam convallis leo at porta molestie. Aliquam sagittis erat vitae est mollis tristique. Sed ultricies id lacus at ornare. Etiam quis turpis pulvinar, porta urna dignissim, efficitur justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
        this.whats_contentleft = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus, sed iaculis odio. Nullam convallis leo at porta molestie. Aliquam sagittis erat vitae est mollis tristique. Sed ultricies id lacus at ornare. ';
        this.howto_title = "How to use it";
        this.howtouseImages = [
            {
                image: Step1,
                title: 'Get it',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus.'
            },
            {
                image: Step2,
                title: 'Login',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus.'
            },
            {
                image: Step3,
                title: 'Use it',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus.'
            },
            {
                image: Step4,
                title: 'Enjoy it',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus.'
            }
        ];
        this.hashtag = '#ilovelima';
        this.hashtagcontent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        this.exclusiveediscounts = "Exclusive discounts";
        this.discounts = [
            {
                image: Adventure,
                titlebutton: 'Adventure',
                description: 'Lorem ipsum dolor sit amet, albucius consetetur sed id, ut nonumes docendi nec. Duo cu utinam mollis liberavisse. Ne mei omnes ceteros consequuntur, cu audiam hendrerit efficiendi vim, sit ad electram periculis scripserit. Antiopam platonem ei per, nostro maiorum assentior per no. Tota discere aliquam vim an, eos illum quidam nominati et, quot dicat appetere qui cu. Epicuri voluptatum qui ex.'
            },
            {
                image: Gastronomy,
                titlebutton: 'Gastronomy',
                description: 'Lorem ipsum dolor sit amet, albucius consetetur sed id, ut nonumes docendi nec. Duo cu utinam mollis liberavisse. Ne mei omnes ceteros consequuntur, cu audiam hendrerit efficiendi vim, sit ad electram periculis scripserit. Antiopam platonem ei per, nostro maiorum assentior per no. Tota discere aliquam vim an, eos illum quidam nominati et, quot dicat appetere qui cu. Epicuri voluptatum qui ex.'
            },
            {
                image: NightLife,
                titlebutton: 'Night Life',
                description: 'Lorem ipsum dolor sit amet, albucius consetetur sed id, ut nonumes docendi nec. Duo cu utinam mollis liberavisse. Ne mei omnes ceteros consequuntur, cu audiam hendrerit efficiendi vim, sit ad electram periculis scripserit. Antiopam platonem ei per, nostro maiorum assentior per no. Tota discere aliquam vim an, eos illum quidam nominati et, quot dicat appetere qui cu. Epicuri voluptatum qui ex.'
            }
        ];
        this.footercontent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non blandit tellus, sed iaculis odio. Nullam convallis leo at porta molestie. Aliquam sagittis erat vitae est mollis tristique. '
        this.lcptitles = [
            {text: this.lcp_title, href: '#lcp', to: 'lcp'}, {text: this.whatis_title, href: '#whatis', to: 'whatis'},
            {text: this.howto_title, href: '#howto', to: 'howto'}
        ];
        this.creditcards = [
            {image: CreditCard1}, {image: CreditCard2}, {image: CreditCard3}, {image: CreditCard4}
        ];
        this.footerlegalthings = [
            {text: 'FAQ', href: '#'}, {text: 'Contact us', href: '#'}, {text: 'Partners', href: '#'},
            {text: 'Terms & Conditions', href: '#'}, {text: 'Privacy Poilicy', href: '#'},
            {text: 'Cookies', href: '#'}, {text: 'Legal Notice', href: '#'}, {text: 'Site map', href: '#'}
        ];
        this.toolbar = [
            {title: this.whatis_title, href: '#whatis', to: 'whatis'}, {
                title: this.howto_title,
                href: '#howto',
                to: 'howto'
            },
            {title: 'Other benefits', href: '#benefits', to: 'benefits'}
        ]
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div className="App">
                <div id='lcp'>
                    <LcpFront
                        background={BackgroundImage}
                        logo={LcpLogo}
                        toolbarElements={this.toolbar}/>
                </div>

                <div id='whatis'>
                    <LcpWhatsIncluded
                        items={this.carouselImages}
                        background={BackgroundWhatsIncluded}
                        imagetickets={TicketsImage}
                        title={this.whatis_title}
                        contentcenter={this.whats_contentcenter}
                        contentleft={this.whats_contentleft}/>
                </div>

                <div id='howto'>
                    <LcpHowToUse
                        items={this.howtouseImages}
                        backgroundDesktop={BacgroundHowtoUseDesktop}
                        backgroundMovil={BackgroundHowToUseMovil}
                        title={this.howto_title}
                        hashtag={this.hashtag}
                        ilovelimaimage={IloveLima}
                        hashtagcontent={this.hashtagcontent}/>
                </div>

                <div id='benefits'>
                    <LcpDiscounts
                        title={this.exclusiveediscounts}
                        items={this.discounts}
                        backgroundDesktop={BackgroundDiscountsDesktop}
                        backgroundMovil={BackgroundDiscountsMovil}/>
                </div>

                <LcpFooter logo={LcpLogo}
                           content={this.footercontent}
                           titles={this.lcptitles}
                           creditcard={this.creditcards}
                           legal={this.footerlegalthings}/>

                <div data-anijs="if: mouseover, do: swing animated" className='footer'>
                    © {this.year} Lima City Pass, Inc. All rights reserved.
                </div>

            </div>
        );
    }
}

export default LcpLanding;
