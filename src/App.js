import React, { Component } from 'react';
import Header from './components/Header/Header';
import Steps from './components/Steps/Steps';
import Summary from './components/Summary/Summary';
import { Route } from 'react-router-dom'
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';

import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            car: {},
            dictionary: {}
        };
    }

    componentDidMount(){

        let that = this;
        let url = 'http://localhost:3000/dictionary/en.json';

        fetch(url)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                that.setState({ dictionary: data });
            });



        fetch('http://localhost:3001/api/car/configuration/2hwH09m')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                that.setState({ car: data });
            });

    }

    changeLanguage(lang){

        let that = this;
        let url = 'http://localhost:3000/dictionary/'+lang+'.json';

        fetch(url)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                that.setState({ dictionary: data });
            });
    }

    moveToNextStep(){
        this.setState({
            step: this.state.step + 1
        });

        //console.log(BrowserHistory);
    }

    render() {
        return (<div className="App">

                <Header changeLanguage={this.changeLanguage.bind(this)} dictionary={this.state.dictionary} />
                <Steps step={this.state.step} dictionary={this.state.dictionary} />

                <div className="container">
                    <main>

                        <Route exact={true} path="/" render={ () => <StepOne moveToNextStep={this.moveToNextStep.bind(this)} dictionary={this.state.dictionary["stepOne"]} /> }  />
                        <Route path="/stepone" render={ () => <StepOne moveToNextStep={this.moveToNextStep.bind(this)} dictionary={this.state.dictionary["stepOne"]} /> }  />
                        <Route path="/steptwo" render={ () => <StepTwo moveToNextStep={this.moveToNextStep.bind(this)} dictionary={this.state.dictionary["stepTwo"]} /> }  />

                    </main>
                    <aside>

                        <Summary details={this.state.car} dictionary={this.state.dictionary['summary']} />

                    </aside>
                </div>


            </div>
        );
    }
}

App.defaultProps = {

};

export default App;
