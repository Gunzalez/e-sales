import React, { Component } from 'react';

class Summary extends Component {

    constructor(props){
        super(props);
        this.state = {
            car : {}
        }
    }

    componentDidMount(){
        this.state = {
            car : this.props.car
        }
    }

    getValue(key){
        return this.props.getValue(this.props.dictionary, key)
    }

    getCarDetail(key, key2){
        let rtnVal = '';
        if(this.props.car[key]){
            let attr = this.props.car[key];
            rtnVal = attr[key2];
        }
        return rtnVal;
    }


    render() {
        return (
            <section className="Summary">
                <div className="content">

                    <h2>{this.getValue('header')}</h2>


                    <table width="100%" border="0">
                        <tbody>
                        <tr>
                            <td>{this.getValue('name')}</td>
                            <td>{this.props.car["Name"]}</td>
                        </tr>
                        <tr>
                            <td>{this.getValue('body')}</td>
                            <td>{this.getCarDetail('Body','Name')}</td>
                        </tr>
                        <tr>
                            <td>{this.getValue('engine')}</td>
                            <td>{this.getCarDetail('Engine','Name')}</td>
                        </tr>
                        <tr>
                            <td>{this.getValue('model')}</td>
                            <td>{this.getCarDetail('Model','Name')}</td>
                        </tr>
                        <tr>
                            <td>{this.getValue('transmission')}</td>
                            <td>{this.getCarDetail('Transmission','Name')}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </section>
        )
    }
}

export default Summary;