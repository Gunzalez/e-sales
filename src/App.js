import React, { Component } from 'react';
import Header from './components/Header/Header';
import Steps from './components/Steps/Steps';
import VerifyUser from './components/VerifyUser/VerifyUser';



import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            carName: 'Toyota Camry Hybrid'
        };
    }

    changeLanguage(lang){
        console.log('changes language to ' + lang)
    }

    render() {
        return (
            <div className="App">
                <Header carName={this.state.carName} changeLanguage={this.changeLanguage} />
                <Steps />
                <VerifyUser />






            </div>
        );
    }
}

App.defaultProps = {

};

export default App;
