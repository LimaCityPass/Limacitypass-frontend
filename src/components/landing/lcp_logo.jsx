
import React, { Component } from 'react';



class LcpLogo extends Component {
    constructor(props) {
        super(props);
        this.src = props.src;
        this.updateSize = props.updateSize;
        this.state = {
            height: props.size
        };
        this.updateInternalSize = this.updateInternalSize.bind(this);
    }

    updateInternalSize() {
        this.newheight = this.props.size;
        this.setState ({
            height: this.newheight
        });
        this.forceUpdate();
        console.log( 'newheight =>', this.state.height )
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    componentWillMount () {
        this.updateInternalSize();
    }

    componentDidMount () {
        window.addEventListener("resize", this.updateInternalSize);
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.updateInternalSize);
    }

    render() {
        return (
            <img src={this.src} style={{'height': this.state.height}}/>
        )
    }
}

export default LcpLogo;