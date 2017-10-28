import React, { Component } from 'react';

class Summary extends Component {

    render() {
        return (
            <section className="Summary">
                <div className="content">

                    <h2>{this.props.dictionary['header']}</h2>
                    <img src={this.props['details'].imageUrl} alt={this.props['details'].name} />

                    <table width="100%" border="0">
                        <tbody>
                        <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
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