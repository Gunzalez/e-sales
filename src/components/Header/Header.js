import React, { Component } from 'react';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';
class Header extends Component {

    changeLanguage(lang){
        this.props.changeLanguage(lang)
    }

    render() {
        return (
            <section className="Header bordered">
                <div className="container">

                    <nav className="navbar">
                        <div className="navbar-header">
                            <img src={Logo} alt={this.props.carName} />
                            <span>{this.props.carName}</span>
                        </div>
                        <div className="language-controls">
                            <button onClick={()=> {this.changeLanguage('en')}}>EN</button>
                            <button onClick={()=> {this.changeLanguage('no')}}>NO</button>
                        </div>
                    </nav>

                </div>
            </section>
        );
    }
}

export default Header;
