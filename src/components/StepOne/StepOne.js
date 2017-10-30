import React, { Component } from 'react';

class StepOne extends Component {

    constructor(props){
        super(props);
        this.state = {
            busy: false,
            dictionary : {}
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

        this.props.moveToNextStep()
    }

    getDictionaryValue(key){
        let rtnVal = '';
        if(this.props.dictionary && this.props.dictionary[key]){
            rtnVal = this.props.dictionary[key];
        }
        return rtnVal;
    }

    render() {
       return (
           <section className="StepOne">

               { this.state.busy ? <div className="spinner"></div> : ''}


               { !this.state.busy ? <div className="content">
                   <h1>{this.getDictionaryValue('header')}</h1>
                   <p>{this.getDictionaryValue('intro')}</p>

                   <button className="btn" onClick={()=>{this.doBankID()}}>{ this.getDictionaryValue('button1Label') }</button>
                   <button className="btn">{ this.getDictionaryValue('button2Label') }</button>
               </div> : ''}

           </section>
       )
    }
}

export default StepOne;