import React, { Component } from 'react';
import { Route } from 'react-router-dom'

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
            dictionary: {}
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

        fetch(dictionaryUrl)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                that.setState({ dictionary: data });

                fetch(carUrl)
                    .then(function(response) {
                        if (response.status >= 400) {
                            throw new Error("Bad response from server");
                        }
                        return response.json();
                    })
                    .then(function(data) {
                        // saves in just the car for now
                        that.setState({ car: data["MarketingSpecification"]["Car"] });
                    });

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

    moveToNextStep(){
        this.setState({
            step: this.state.step + 1
        });
    }

    render() {
        return (
            <div className="App">

                <Header changeLanguage={this.changeLanguage.bind(this)} dictionary={this.state.dictionary["app"]} />
                <Steps step={this.state.step} dictionary={this.state.dictionary} />

                <div className="container">
                    <main>

                        <Route exact={true} path="/" render={ () => <StepZero moveToNextStep={this.moveToNextStep.bind(this)} dictionary={this.state.dictionary["stepZero"]} getValue={this.getDictionaryValueForKey} /> }>

                        </Route>
                        <Route path="/stepone" render={ () => <StepOne moveToNextStep={this.moveToNextStep.bind(this)} dictionary={this.state.dictionary["stepOne"]} getValue={this.getDictionaryValueForKey} /> }  />
                        <Route path="/steptwo" render={ () => <StepTwo moveToNextStep={this.moveToNextStep.bind(this)} dictionary={this.state.dictionary["stepTwo"]} getValue={this.getDictionaryValueForKey} /> }  />

                    </main>
                    <aside>

                        <Summary car={this.state.car} dictionary={this.state.dictionary['summary']} getValue={this.getDictionaryValueForKey} />

                    </aside>
                </div>


            </div>
        );
    }
}

App.defaultProps = {

};

export default App;
