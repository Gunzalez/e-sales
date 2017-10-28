import React, { Component } from 'react';

class VerifyUser extends Component {

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
            <section className="VerifyUser">

                { this.state.busy ? <div className="spinner"></div> : ''}


                { !this.state.busy ? <div className="content">
                    <h1>Verify your identity</h1>
                    <p>How would you like to verify your identity?</p>

                    <button className="btn" onClick={()=>{this.doBankID()}}>BankID on this device</button>
                    <button className="btn">BankID on a different device</button>
                </div> : ''}

            </section>
        )
    }

    render() {
       return (this.props.step === 1 ? this.renderTrue() : this.renderFalse())
    }
}

export default VerifyUser;