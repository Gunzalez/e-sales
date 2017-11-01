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

    getCarDetail(key, key2){
        let rtnVal = '',
            car = this.state.car;

        try {
            rtnVal = car[key][key2];
            return rtnVal
        } catch (err){
            return rtnVal;
        }
    }

    getValue(key){
        return this.props.getValue(this.props.dictionary, key)
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
                            <td>&nbsp;</td>
                        </tr>
                        {/*<tr>*/}
                            {/*<td>{this.getValue('engine')}</td>*/}
                            {/*<td>{console.log(this.props.car["Engine"])}</td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                            {/*<td>Model</td>*/}
                            {/*<td>{console.log(this.getCarDetail('Model','Name'))}</td>*/}
                        {/*</tr>*/}
                        <tr>
                            <td>{this.getValue('transmission')}</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </section>
        )
    }
}

export default Summary;