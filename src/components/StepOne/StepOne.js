import React, { Component } from 'react';

class StepOne extends Component {

    constructor(props){
        super(props);
        this.state = {
            busy: false
        };
    }

    moveToNextStep(){





        //this.props.history.push(this.props.location.pathname + '/steptwo');
        this.props.history.push('/'+ this.props.configId + '/steptwo');
    }

    componentDidMount(){
        this.props.setCurrentStep(1);
    }

    getValue(key){
        return this.props.getValue(this.props.dictionary, key)
    }

    render() {
       return (
           <section className="StepOne">
               <div className="content">

                   <div className="copy">
                       <h1>{this.getValue('header')}</h1>
                       <p>{this.getValue('intro')}</p>
                   </div>

                   <button className="btn">{ this.getValue('button1Label') }</button><br/>
                   <button className="btn">{ this.getValue('button2Label') }</button><br/>
                   <button className="btn">{ this.getValue('button3Label') }</button><br/>

                   <button className="btn btn-red" onClick={this.moveToNextStep.bind(this)}>Step Two</button>

               </div>

           </section>
       )
    }
}

export default StepOne;