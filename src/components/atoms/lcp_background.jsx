import React, {Component} from 'react';

import glamorous from 'glamorous'

function LcpBackground(img) {
    let Background;
    if (img) {
        Background = glamorous.div({
            fontFamily: 'Quicksand',
            backgroundImage: `url(${img})`,
            height: '-webkit-fill-available',
            width: 'auto',
        });
    } else {
        Background = glamorous.div({
            fontFamily: 'Quicksand',
            backgroundColor: '#38AAF9',
            height: '-webkit-fill-available',
            width: 'auto',
        });
    }

    return Background;
}

export default LcpBackground;