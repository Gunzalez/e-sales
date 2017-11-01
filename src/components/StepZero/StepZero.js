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

    clicked(e){
        e.preventDefault();
        return false;
    }

    render() {
        let instructions = [];
        if(this.state.dictionary['instructions']){
            instructions = this.state.dictionary['instructions']
        }
        return (
            <section className="StepOne">
                <div className="content">

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

                    <Link to="/stepone" className="btn btn-red" onClick={()=>{this.clicked()}}>{this.getValue('buttonLabel1')}</Link>

                </div>

            </section>
            )
    }
}

export default StepZero;