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

        this.props.moveToNextStep();
    }

    getValue(key){
        return this.props.getValue(this.props.dictionary, key)
    }

    render() {
       return (
           <section className="StepOne">
               <div className="content">

                   { this.state.busy ? <div className="spinner"></div> : ''}
                   { !this.state.busy ? <div className="content">
                       <h1>{this.getValue('header')}</h1>
                       <p>{this.getValue('intro')}</p>

                       <button className="btn" onClick={()=>{this.doBankID()}}>{ this.getValue('button1Label') }</button>
                       <button className="btn">{ this.getValue('button2Label') }</button>
                   </div> : ''}

               </div>

           </section>
       )
    }
}

export default StepOne;