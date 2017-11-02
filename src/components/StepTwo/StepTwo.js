import React, { Component } from 'react';

class StepTwo extends Component {

    moveToNextStep(){
        this.props.moveToNextStep()
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

                <div className="content">
                    <h1>{this.getDictionaryValue('header')}</h1>
                    <p>Lots of form fields here</p>

                    <button>Submit</button>
                </div>

            </section>
        )
    }
}

export default StepTwo;