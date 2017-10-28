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
            carDetails: {
                id: 'xAD-01',
                name: 'Toyota Camry Hybrid',
                imageUrl: '/data/item.jpg'
            }
        };
    }

    changeLanguage(lang){
        console.log('changes language to ' + lang)
    }

    moveToNextStep(){
        this.setState({
            step: this.state.step + 1
        })
    }

    // Verify User actions



    render() {
        return (
            <div className="App">
                <Header carName={this.state.carName} changeLanguage={this.changeLanguage} />
                <Steps step={this.state.step} />

                <div className="container">
                    <main>
                        <StepOne step={this.state.step} moveToNextStep={this.moveToNextStep.bind(this)} />
                        <StepTwo step={this.state.step} moveToNextStep={this.moveToNextStep.bind(this)} />
                    </main>
                    <aside>
                        <Summary itemDetails={this.state.carDetails} />
                    </aside>
                </div>


            </div>
        );
    }
}

App.defaultProps = {

};

export default App;
