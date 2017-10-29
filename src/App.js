import React, { Component } from 'react';
import Header from './components/Header/Header';
import Steps from './components/Steps/Steps';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import Summary from './components/Summary/Summary';



import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            carName: 'Toyota Camry Hybrid',
            step: 1,
            details: {
                id: 'xAD-01',
                name: 'Toyota Camry Hybrid',
                imageUrl: '/data/item.jpg'
            },
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
        })
    }



    render() {
        return (
            <div className="App">

                <Header carName={this.state.carName} changeLanguage={this.changeLanguage.bind(this)} dictionary={this.state.dictionary} />
                <Steps step={this.state.step} dictionary={this.state.dictionary} />

                <div className="container">
                    <main>

                        <StepOne step={this.state.step} moveToNextStep={this.moveToNextStep.bind(this)} dictionary={this.state.dictionary["stepOne"]} />
                        <StepTwo step={this.state.step} moveToNextStep={this.moveToNextStep.bind(this)} dictionary={this.state.dictionary["stepTwo"]} />

                    </main>
                    <aside>

                        <Summary details={this.state.details} dictionary={this.state.dictionary['summary']} />

                    </aside>
                </div>


            </div>
        );
    }
}

App.defaultProps = {

};

export default App;
