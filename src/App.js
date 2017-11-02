import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header';
import Steps from './components/Steps/Steps';

import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import StepZero from './components/StepZero/StepZero';
import Summary from './components/Summary/Summary';

import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            step: 0,
            lang: 'en',
            car: {},
            dictionary: {},
            configId: ''
        };
    }

    getDictionaryValueForKey(dictionary, key){
        let rtnVal = '';
        try {
            rtnVal = dictionary[key];
            return rtnVal
        } catch (err){
            return rtnVal;
        }
    }

    componentDidMount(){

        let that = this,
            api = 'http://localhost:3000',
            carUrl = api + '/data/car.json',
            dictionaryUrl = api + '/dictionary/'+ this.state.lang+'.json';

        // get locale for the app
        fetch(dictionaryUrl)
            .then(function(response) {
                if (response.status >= 400) {
                    // todo better error handling
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                that.setState({ dictionary: data });

                // get configId from url
                let path = window.location.pathname,
                    configId = path.split("/")[1];
                    that.setState({ configId: configId });
                });

                // get car data - carUrl is faked, will contain 'configId'
                fetch(carUrl)
                    .then(function(response) {
                        if (response.status >= 400) {
                            // todo better error handling
                            throw new Error("Bad response from server");
                        }
                        return response.json();
                    })
                    .then(function(data) {
                        // saves just the car details
                        that.setState({ car: data["MarketingSpecification"]["Car"] });

                });
    }

    changeLanguage(lang){

        let that = this;
        let url = 'http://localhost:3000/dictionary/'+lang+'.json';

        if(lang !== this.state.lang){
            fetch(url)
                .then(function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then(function(data) {
                    that.setState({ dictionary: data });

                    that.setState({
                        lang: lang
                    });
                });
        }
    }

    setCurrentStep(step){
        this.setState({
            step: step
        });
    }

    render() {

        return (
            <div className="App">

                <Header changeLanguage={this.changeLanguage.bind(this)} dictionary={this.state.dictionary["app"]} />
                <Steps step={this.state.step} dictionary={this.state.dictionary} />

                <div className="container">
                    <main>
                        <Switch>
                            <Route exact={true} path="/" render={ (props) => <StepZero {...props} configId={this.state.configId} setCurrentStep={this.setCurrentStep.bind(this)} dictionary={this.state.dictionary["stepZero"]} getValue={this.getDictionaryValueForKey} /> } />
                            <Route exact={true} path="/:configId" render={ (props) => <StepZero {...props} configId={this.state.configId} setCurrentStep={this.setCurrentStep.bind(this)} dictionary={this.state.dictionary["stepZero"]} getValue={this.getDictionaryValueForKey} /> } />
                            <Route exact={true} path="/:configId/stepone" render={ (props) => <StepOne {...props} configId={this.state.configId} setCurrentStep={this.setCurrentStep.bind(this)} dictionary={this.state.dictionary["stepOne"]} getValue={this.getDictionaryValueForKey} /> }  />
                            <Route exact={true} path="/:configId/steptwo" render={ (props) => <StepTwo {...props} configId={this.state.configId} setCurrentStep={this.setCurrentStep.bind(this)} dictionary={this.state.dictionary["stepTwo"]} getValue={this.getDictionaryValueForKey} /> }  />
                        </Switch>
                    </main>
                    <aside>
                        <Summary car={this.state.car} configId={this.state.configId} dictionary={this.state.dictionary['summary']} getValue={this.getDictionaryValueForKey} />
                    </aside>
                </div>


            </div>
        );
    }
}

App.defaultProps = {

};

export default App;
