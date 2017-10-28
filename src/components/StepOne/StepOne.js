import React, { Component } from 'react';

class StepOne extends Component {

    constructor(props){
        super(props);
        this.state = {
            busy: false
        };
    }

    doBankID(){
        this.setState({
            busy: true
        });
        // does lots of ajax stuff
        //
        //
        //

        this.moveToNextStep();
    }

    moveToNextStep(){
        this.props.moveToNextStep()
    }

    renderFalse(){
        return (
            ''
        )
    }

    renderTrue(){
        return (
            <section className="StepOne">

                { this.state.busy ? <div className="spinner"></div> : ''}


                { !this.state.busy ? <div className="content">
                    <h1>{this.props.dictionary['header']}</h1>
                    <p>{this.props.dictionary['intro']}</p>

                    <button className="btn" onClick={()=>{this.doBankID()}}>{this.props.dictionary['button1Label']}</button>
                    <button className="btn">{this.props.dictionary['button2Label']}</button>
                </div> : ''}

            </section>
        )
    }

    render() {
       return (this.props.step === 1 ? this.renderTrue() : this.renderFalse())
    }
}

export default StepOne;