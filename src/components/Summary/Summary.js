import React, { Component } from 'react';

class Summary extends Component {

    getValue(key){
        return this.props.getValue(this.props.dictionary, key)
    }

    getCarDetail(key){
        let rtnVal = '';
        if(this.props.car[key]){
            let attr = this.props.car[key];
            rtnVal = attr["Name"];
        }
        return rtnVal;
    }


    render() {

        return (
            <section className="Summary">
                <div className="content">

                    <h2>{this.getValue('header')}</h2>

                    <img src={'https://images.toyota-europe.com/configuration/'+ this.props.configID + '/exterior-04.png?width=768&height=516'} />


                    <table width="100%" border="0">
                        <tbody>
                        <tr>
                            <td>{this.getValue('name')}</td>
                            <td>{this.props.car["Name"]}</td>
                        </tr>
                        <tr>
                            <td>{this.getValue('body')}</td>
                            <td>{this.getCarDetail('Body')}</td>
                        </tr>
                        <tr>
                            <td>{this.getValue('engine')}</td>
                            <td>{this.getCarDetail('Engine')}</td>
                        </tr>
                        <tr>
                            <td>{this.getValue('model')}</td>
                            <td>{this.getCarDetail('Model')}</td>
                        </tr>
                        <tr>
                            <td>{this.getValue('transmission')}</td>
                            <td>{this.getCarDetail('Transmission')}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </section>
        )
    }
}

export default Summary;