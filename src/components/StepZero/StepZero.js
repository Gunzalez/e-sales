import React, { Component } from 'react';
import Summary from '../Summary/Summary'

class StepZero extends Component {

    constructor(props){
        super(props);
        this.state = {
            dictionary: {}
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            dictionary: nextProps['dictionary']
        });
    }

    getValue(key){
        return this.props.getValue(this.props.dictionary, key)
    }

    renderLi(string, i){
        return (
            <li key={i}>{string}</li>
        )
    }

    moveToNextStep(){
        this.props.history.push('/'+ this.props.configId + '/stepone');
    }

    componentDidMount(){
        this.props.setCurrentStep(0);
    }

    render() {
        let instructions = [];
        if(this.state.dictionary && this.state.dictionary['instructions']){
            instructions = this.state.dictionary['instructions']
        }

        return (
            <section className="StepZero">
                <div className="container">

                    <main>
                        <div className="copy">
                            <h1>{this.getValue('welcome')}</h1>
                            <h3>{this.getValue('header')}</h3>
                            <ul>
                                { instructions.map((instruction, i) => {
                                    return this.renderLi(instruction, i)
                                })}
                            </ul>
                            <p>{this.getValue('para1')}</p>
                        </div>
                        <button className="btn btn-red" onClick={this.moveToNextStep.bind(this)}>{this.getValue('buttonLabel1')}</button>
                    </main>
                    <aside>
                        <Summary car={this.props.car} configId={this.props.configId} dictionary={this.props.summary} />
                    </aside>

                </div>
            </section>
        )
    }
}

export default StepZero;