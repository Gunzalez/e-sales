import React, { Component } from 'react';

class CreditCheck extends Component {

    moveToNextStep(){
        this.props.moveToNextStep()
    }

    renderFalse(){
        return (
            <section></section>
        )
    }

    renderTrue(){
        return (
            <section className="CreditCheck">
                <div className="container">

                    <div className="content">
                        <h1>Credit Check</h1>
                        <p>Lots of form fields here</p>

                        <button>Submit</button>
                    </div>





                </div>
            </section>
        )
    }

    render() {

        return (this.props.step === 2 ? this.renderTrue() : this.renderFalse())

    }
}

export default CreditCheck;