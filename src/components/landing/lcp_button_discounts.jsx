import React, {Component} from 'react';
import './styles/ButtonDiscounts.css';

class ButtonDiscounts extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }
    render() {
        return (
            <div>
                <div className='btndiscounts unselectable'>
                    {this.name}
                    <div className='minusculas'>
                        see more
                    </div>
                </div>
            </div>
        );
    }
}

ButtonDiscounts.propTypes = {};

export default ButtonDiscounts;
