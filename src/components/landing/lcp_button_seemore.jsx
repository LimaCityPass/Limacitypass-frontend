import React, {Component} from 'react';
import "./styles/ButtonSeeMore.css";
import SeeMoreImage from '../../assets/seemore-button.svg'

class ButtonSeeMore extends Component {
    render() {
        return (
            <div className='movementimg cursor-pointer'>
                <img src={SeeMoreImage} className='seemoreimg'/>
            </div>
        );
    }
}

export default ButtonSeeMore;

