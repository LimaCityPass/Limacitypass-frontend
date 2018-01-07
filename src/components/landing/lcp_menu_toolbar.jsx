import React, {Component} from 'react';
import "./styles/MenuToolbar.css"
import {animateScroll as scroll, DirectLink, Events, Link, scrollSpy} from 'react-scroll';

class MenuToolbar extends Component {
    constructor(props) {
        super(props);
        this.elements = props.elements;
    }
    render() {
        return (
            <div>
                <div className='divmenutoolbar'>
                    <div className='divmenu2'>
                        <div className='divmenu3'>
                            <div className='presentation'>
                                <div className='menu'>
                                    {this.elements.map( elem => (
                                        <Link
                                            to={elem.to}
                                            spy={true}
                                            smooth={true}
                                            delay={0}
                                            duration={800}
                                            offset={-30}
                                        >
                                            <div>
                                                <span className='menuitem' tabIndex='0'>
                                                    <div>
                                                        <div className='divtitle'>
                                                            <span className='spandivtitle'></span>
                                                            <div>{elem.title}</div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default MenuToolbar;
