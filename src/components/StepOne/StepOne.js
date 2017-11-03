import React, { Component } from 'react';
import Summary from '../Summary/Summary'

class StepOne extends Component {

    constructor(props){
        super(props);
        this.state = {
            busy: false
        };
    }

    getValue(key){
        return this.props.getValue(this.props.dictionary, key)
    }

    moveToNextStep(){
        // do all kinds of magic stuff before you move to next step






        this.props.history.push('/'+ this.props.configId + '/steptwo');
    }

    componentDidMount(){
        this.props.setCurrentStep(1);
    }

    render() {
       return (
           <section className="StepOne">
               <div className="container">
                   <main>

                       <div className="copy">
                           <h1>{this.getValue('header')}</h1>
                           <p>{this.getValue('intro')}</p>
                       </div>

                       <button className="btn">{ this.getValue('button1Label') }</button><br/>
                       <button className="btn">{ this.getValue('button2Label') }</button><br/>
                       <button className="btn">{ this.getValue('button3Label') }</button><br/>

                       <button className="btn btn-red" onClick={this.moveToNextStep.bind(this)}>Step Two</button>

                   </main>
                   <aside>
                       <Summary car={this.props.car} configId={this.props.configId} dictionary={this.props.summary}  getValue={this.props.getValue}  />
                   </aside>

               </div>
           </section>

       )
    }
}

export default StepOne;