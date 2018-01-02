import React, { Component } from 'react';

import "./styles/BuyNowButton.css"

class LcpBuyNowButton extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }

    render() {
        return (
            <div>
                <div class="Button-wrapper">
                    <button class="Button">{this.name}</button>
                </div>
                <svg xmlns='http://www.w3.org/2000/svg' style={{'display': 'none'}} >
                    <symbol id="donut" viewBox="0 0 14 14">
                        <path fill="#F4157E" fill-rule="nonzero" d="M7 12c2.76 0 5-2.24 5-5S9.76 2 7 2 2 4.24 2 7s2.24 5 5 5zm0 2c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                    </symbol>

                    <symbol id="circle" viewBox="0 0 10 10">
                        <circle cx="5" cy="5" r="5" fill="#F4157E" fill-rule="evenodd"/>
                    </symbol>

                    <symbol id="tri_hollow" viewBox="0 0 12 11">
                        <path fill="#F4157E" fill-rule="nonzero" d="M3.4 8.96h5.2L6 4.2 3.4 8.95zM6 0l6 11H0L6 0z"/>
                    </symbol>

                    <symbol id="triangle" viewBox="0 0 10 9">
                        <path fill="#F4157E" fill-rule="evenodd" d="M5 0l5 9H0"/>
                    </symbol>

                    <symbol id="square" viewBox="0 0 8 8">
                        <path fill="#F4157E" fill-rule="evenodd" d="M0 0h8v8H0z"/>
                    </symbol>

                    <symbol id="squ_hollow" viewBox="0 0 8 8">
                        <path fill="#F4157E" fill-rule="nonzero" d="M1.5 1.5v5h5v-5h-5zM0 0h8v8H0V0z"/>
                    </symbol>
                </svg>
            </div>
        )
    }
}

export default LcpBuyNowButton