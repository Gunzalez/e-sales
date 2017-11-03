import React, { Component } from 'react';
import Summary from '../Summary/Summary';
import OptionOne from './OptionOne';
import OptionTwo from './OptionTwo';
import OptionThree from './OptionThree';

class StepOne extends Component {

    constructor(props){
        super(props);
        this.state = {
            busy: false,
            option: 0
        };
    }

    getValue(key){
        return this.props.getValue(this.props.dictionary, key)
    }

    setOption(option){
        this.setState({
            option: option
        })
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



                           { (this.state.option === 1) ? <OptionOne dictionary={this.props.dictionary}  getValue={this.props.getValue} /> : null }
                           { (this.state.option === 2) ? <OptionTwo  dictionary={this.props.dictionary}  getValue={this.props.getValue} /> : null }
                           { (this.state.option === 3) ? <OptionThree dictionary={this.props.dictionary}  getValue={this.props.getValue} /> : null }

                       </div>

                       <button className="btn" onClick={()=> {this.setOption(1)}}>{ this.getValue('button1Label') }</button><br/>
                       <button className="btn" onClick={()=>{this.setOption(2)}}>{ this.getValue('button2Label') }</button><br/>
                       <button className="btn" onClick={()=> {this.setOption(3)}}>{ this.getValue('button3Label') }</button><br/>

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