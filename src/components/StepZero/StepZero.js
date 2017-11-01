import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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

    render() {
        let instructions = [];
        if(this.state.dictionary['instructions']){
            instructions = this.state.dictionary['instructions']
        }
        return (
            <section className="StepOne">
                <div className="content">

                    <h1>{this.getValue('welcome')}</h1>
                    <h3>{this.getValue('header')}</h3>
                    <ul>
                        { instructions.map((instruction, i) => {
                           return this.renderLi(instruction, i)
                        })}
                    </ul>
                    <p>{this.getValue('para1')}</p>
                    <Link to="/stepone" className="btn-progress">Start</Link>

                </div>

            </section>
            )
    }
}

export default StepZero;