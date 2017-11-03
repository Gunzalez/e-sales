import React, { Component } from 'react';
import Summary from '../Summary/Summary'


class StepTwo extends Component {

    moveToNextStep(){
        alert('Work in Progress, you may not proceed beyond this point');
        //this.props.moveToNextStep();
    }

    getDictionaryValue(key){
        let rtnVal = '';
        if(this.props.dictionary && this.props.dictionary[key]){
            rtnVal = this.props.dictionary[key];
        }
        return rtnVal;
    }

    componentDidMount(){
        this.props.setCurrentStep(2);
    }

    render() {
        return (
            <section className="StepTwo">
                <div className="container">

                    <main>
                        <div className="copy">
                            <h1>{this.getDictionaryValue('header')}</h1>
                            <p>Lots of form fields here</p>
                        </div>
                        <button className="btn btn-red" onClick={this.moveToNextStep.bind(this)}>Step Three</button>
                    </main>

                    <aside>
                        <Summary car={this.props.car} configId={this.props.configId} dictionary={this.props.summary} />
                    </aside>

                </div>
            </section>
        )
    }
}

export default StepTwo;