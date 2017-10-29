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

    renderFalse(){
        return (
            ''
        )
    }

    renderTrue(){
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

    render() {
        return (this.props.step === 2 ? this.renderTrue() : this.renderFalse())
    }
}

export default StepTwo;