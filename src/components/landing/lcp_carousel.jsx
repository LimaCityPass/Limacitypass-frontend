import React, { Component } from 'react';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./styles/Carousel.css";

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: 'block', background: 'black', right: 10}}
            onClick={onClick}>

        </div>
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: 'block', background: 'black', left: 10}}
            onClick={onClick}
        >

        </div>
    );
}

class SimpleSlider extends Component {

    constructor(props) {
        super(props);
        this.items = props.items;
        this.carouselheight = window.innerHeight * 0.45;
        this.otherheight = (window.screen.availHeight - 80) * 0.45;
        this.settings = {
            autoplay: true,
            pauseOnHover:true,
            responsive: [ { breakpoint: 320, settings: { slidesToShow: 1 } }, { breakpoint: 470, settings: { slidesToShow: 1.4 } }, { breakpoint: 640, settings: { slidesToShow: 2 } }, { breakpoint: 730, settings: { slidesToShow: 2.28 } }, { breakpoint: 830, settings: { slidesToShow: 2.6 } }, { breakpoint: 960, settings: { slidesToShow: 3 } }, { breakpoint: 1041, settings: { slidesToShow: 3.25 } }, { breakpoint: 1300, settings: { slidesToShow: 4 } }, { breakpoint: 1720, settings: { slidesToShow: 4.5 } }, { breakpoint: 10000, settings:  'unslick' }, ],
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            autoplaySpeed: 1200,
            arrows: false,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
    };

    render () {
        return (
            <div className='containercarousel' style={{'height':'314.09px'}}>
            <Slider {...this.settings} className='withoutmarpadd'>
                {this.items.map((item) =>
                    <a href="#">
                        <div className='block' style={{'height':this.otherheight}}>
                            <div className='imagescarousel backgroundcarousel' style={{'backgroundImage': `url(${item.image}`, 'height': this.otherheight}}>
                                <div className='block-caption' style={{'height':this.otherheight}}>
                                    <div className='divinfocarousel' style={{'height':this.otherheight}}>
                                        <div className='infocarousel'>{item.name}</div>
                                        <div className='infocarousel'>{item.title}</div>
                                        <div>LEARN MORE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                )}
            </Slider>
            </div>
        );
    }

}

export default SimpleSlider