import React, { Component } from 'react';

class Steps extends Component {

    getDictionaryValue(step, key){
        let rtnVal = '';
        if(this.props.dictionary && this.props.dictionary[step] && this.props.dictionary[step][key]){
            rtnVal = this.props.dictionary[step][key]
        }
        return rtnVal;
    }

    render() {
        return (
            <section className="Steps bordered">
                <div className="container">

                    <nav className="navbar">
                        <button className="button-arrow left"><span></span></button>
                        <button disabled className={this.props.step === 1 ? 'active' : ''}>{ this.getDictionaryValue('stepOne','label') }</button>
                        <button disabled className={this.props.step === 2 ? 'active' : ''}>{ this.getDictionaryValue('stepTwo','label') }</button>
                        <button disabled className={this.props.step === 3 ? 'active' : ''}>3. Check details</button>
                        <button disabled className={this.props.step === 4 ? 'active' : ''}>4. Select dealer</button>
                        <button disabled className={this.props.step === 5 ? 'active' : ''}>5. Sign contract</button>
                        <button disabled className="button-arrow right"><span></span></button>
                    </nav>

                </div>
            </section>
        );
    }
}

export default Steps;
