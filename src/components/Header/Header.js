import React, { Component } from 'react';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';
class Header extends Component {

    changeLanguage(lang){
        this.props.changeLanguage(lang)
    }

    getDictionaryValue(key){
        let rtnVal = '';
        if(this.props.dictionary){
            rtnVal = this.props.dictionary[key];
        }
        return rtnVal;
    }

    render() {
        return (
            <section className="Header bordered">
                <div className="container">

                    <nav className="navbar">
                        <div className="navbar-header">
                            <img src={Logo} alt={this.getDictionaryValue('logo-alt-text')} />
                            <span>{this.getDictionaryValue('title')}</span>
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
