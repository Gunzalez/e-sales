import React from 'react';
import Logo from '../../assets/images/logo.svg';
import './Header.css';

const getValue = (dictionary, key) => {
    let rtnVal = '';
    try {
        rtnVal = dictionary[key];
        return rtnVal
    } catch (err){
        return rtnVal;
    }
};

const Header = (props) => (
    <section className="Header bordered">
        <div className="container">

            <nav className="navbar">
                <div className="navbar-header">
                    <img src={Logo} alt={ getValue(props.dictionary, 'logo-alt-text') } />
                    <span>{ getValue(props.dictionary, 'title') } </span>
                </div>
                <div className="language-controls">
                    <button onClick={()=> {props.changeLanguage('en')}}>EN</button>
                    <button onClick={()=> {props.changeLanguage('no')}}>NO</button>
                </div>
            </nav>

        </div>
    </section>
);

export default Header;
