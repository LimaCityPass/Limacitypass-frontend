import React, {Component} from 'react';
import './styles/ButtonHowToUse.css';

class ButtonHowToUse extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }
    render() {
        return (
            <div>
                <div className='btnhowtouse unselectable'>
                    {this.name}
                </div>
            </div>
        );
    }
}

export default ButtonHowToUse;
